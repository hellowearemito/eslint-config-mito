var xtend = require('xtend');
var syncRequest = require('sync-request');
var fs = require('fs');
var path = require('path');
var ProgressBar = require('progress')

var GENERATED_DATETIME = (new Date()).toString();

var EXTEND_FILES = [{
  name: 'default',
  path: './index.js'
}, {
  name: 'legacy',
  path: './legacy.js'
}];

var README_START = '# [eslint](http://eslint.org)-config-mito documentation\n> Generated: ' + GENERATED_DATETIME + '\n\n';
var LICENSE = '\n## License\nMIT © 2016 Gergely Kovács (gg.kovacs@gmail.com)\n';

var ESLINT_DOCS_URL = 'https://raw.githubusercontent.com/eslint/eslint/master/docs/rules/';

function isExists(path) {
  try {
    fs.accessSync(path, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function objectLength(obj) {
  var size = 0
  var key;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }

  return size;
};

function parseFile(contents) {
  var rules = contents.rules || {};

  if (contents.extends) {
    for (var i = 0, l = contents.extends.length; i < l; i++) {
      var subrules = parseFile(require(contents.extends[i].replace(/^eslint-config-mito/, '.') + '.js'));
      rules = xtend(rules, subrules);
    }
  }

  return rules;
}

function writeFile(file, data) {
  fs.writeFile(path.join(__dirname, file), data, 'utf8');
}

function getFirstLine(str) {
  return /^.?(.*)/g.exec(str)[0];
}

function markdownHeaderToHash(str) {
  return '#' + str.substr(2).replace(/[^\w\s!-]/gi, '').replace(/ /g, '-').toLowerCase();
}

function getRuleMarkdown(rulename) {
  var filename = path.join('.cache', rulename + '.md');
  var res = null;
  var body = null;

  if (!isExists(path.join(__dirname, '.cache'))) {
    fs.mkdirSync(path.join(__dirname, '.cache'));
  }

  if (isExists(path.join(__dirname, filename))) {
    return fs.readFileSync(path.join(__dirname, filename), 'utf8');
  } else {
    res = syncRequest('GET', ESLINT_DOCS_URL + rulename + '.md');
    body = res.getBody('utf8');

    writeFile(filename, body);

    return body;
  }
}

function main() {
  var md = '';
  var tableOfContents = '';
  var readme = README_START;
  var total = 0;

  for (var i = 0, l = EXTEND_FILES.length; i < l; i++) {
    EXTEND_FILES[i].rules = parseFile(require(EXTEND_FILES[i].path));
    total += objectLength(EXTEND_FILES[i].rules);
  }

  var bar = new ProgressBar('generate documentation [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 50,
    total: total + 10
  });

  for (i = 0, l = EXTEND_FILES.length; i < l; i++) {
    var name = EXTEND_FILES[i].name;
    var rules = EXTEND_FILES[i].rules;

    readme += '* [`' + name + '` configurations](' + name + '.md)\n';

    bar.tick();

    if (i === (l - 1)) {
      readme += LICENSE;
      bar.tick();
    }

    md = '';

    tableOfContents = '# [eslint](http://eslint.org)-config-mito `' + name + '` configurations\n> Generated: ' + GENERATED_DATETIME + '\n\n## Table of contents\n\n';

    bar.tick();

    for (var rulename in rules) {
      var ruleMarkdown = getRuleMarkdown(rulename);
      var firstLine = getFirstLine(ruleMarkdown);
      var hash = markdownHeaderToHash(firstLine);
      var value = JSON.stringify(rules[rulename], null, 2);

      tableOfContents += '* [' + rulename + ']' + '(' + hash + ')' + '\n';

      md += '\n##' + firstLine + '\n\n';
      md += '**Key:** ' + rulename + ' ([docs](http://eslint.org/docs/rules/' + rulename + '))\n\n';
      md += '**Value:** ';

      if (value.length > 1) {
        md += '\n';
        md += '```javascript\n' + value + '\n```\n';
      } else {
        md += '``' + value + '``\n';
      }

      md += '\n**[⬆ back to top](#table-of-contents)**\n'

      bar.tick();
    }

    md = tableOfContents + '\n---\n' + md + LICENSE;

    bar.tick();

    writeFile(path.join('docs', name + '.md'), md);

    bar.tick();
  }

  writeFile(path.join('docs', 'README.md'), readme);

  bar.tick();
}

main();
