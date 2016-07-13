var xtend = require('xtend');
var syncRequest = require('sync-request');
var fs = require('fs');
var path = require('path');
var ProgressBar = require('progress');

var EXTEND_FILES = [{
  name: 'default',
  path: './index.js'
}, {
  name: 'legacy',
  path: './legacy.js'
}];

var GENERATED_DATETIME = (new Date()).toString();
var README_START = '# [eslint](http://eslint.org)-config-mito documentation\n> Generated: ' + GENERATED_DATETIME + '\n\n';
var LICENSE = '\n## License\nMIT © 2016 Mito (info@mito.hu)\n';
var ESLINT_DOCS_URL = {
  default: 'https://raw.githubusercontent.com/eslint/eslint/master/docs/rules/',
  import: 'https://raw.githubusercontent.com/benmosher/eslint-plugin-import/master/docs/rules/'
};
var RULE_LINKS = {
  default: {
    start: 'http://eslint.org/docs/rules/',
    end: ''
  },
  import: {
    start: 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
    end: '.md'
  }
}

function isExists(path) {
  try {
    fs.accessSync(path, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function objectLength(obj) {
  var size = 0;

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }

  return size;
}

function parseFile(contents) {
  var rules = contents.rules || {};

  if (contents.extends) {
    for (var i = 0, l = contents.extends.length; i < l; i++) {
      var subrules = parseFile(require(contents.extends[i]));
      rules = xtend(rules, subrules);
    }
  }

  return rules;
}

function getMarkdownByRulename(pluginName, rulename) {
  var cachePath = path.join(__dirname, '.cache');
  var body = null;

  if (!isExists(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  var pluginDocsPath = path.join(cachePath, pluginName);

  if (!isExists(pluginDocsPath)) {
    fs.mkdirSync(pluginDocsPath);
  }

  var filename = rulename + '.md';
  var filePath = path.join(cachePath, pluginName, filename);

  if (isExists(filePath)) {
    body = fs.readFileSync(filePath, 'utf8');
  } else {
    var res = syncRequest('GET', ESLINT_DOCS_URL[pluginName] + rulename + '.md');
    body = res.getBody('utf8');
    fs.writeFileSync(filePath, body, 'utf8');
  }

  return body;
}

function main() {
  var md = '';
  var tableOfContents = '';
  var readme = README_START;
  var total = 0;

  var j = EXTEND_FILES.length;
  while (j--) {
    EXTEND_FILES[j].rules = parseFile(require(EXTEND_FILES[j].path));
    total += objectLength(EXTEND_FILES[j].rules);
  }

  var bar = new ProgressBar('generate documentation [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 50,
    total: total + 10
  });

  for (var i = 0, l = EXTEND_FILES.length; i < l; i++) {
    var item = EXTEND_FILES[i];
    var name = item.name;
    var rules = item.rules;

    readme += '* [`' + name + '` configurations](' + name + '.md)\n';

    bar.tick();

    if (i === (l - 1)) {
      readme += LICENSE;
      bar.tick();
    }

    md = '';

    tableOfContents = '# [eslint](http://eslint.org)-config-mito `' + name + '` configurations\n> Generated: ' + GENERATED_DATETIME + '\n\n## Table of contents\n\n';

    bar.tick();

    for (var rulenameOrig in rules) {
      var pluginName = 'default';
      var rulename = rulenameOrig;

      if (rulename.indexOf('/') !== -1) {
        rulename = rulename.split('/');
        pluginName = rulename[0];
        rulename = rulename[1];
      }

      var ruleMarkdown = getMarkdownByRulename(pluginName, rulename);
      var firstLine = /^.?(.*)/g.exec(ruleMarkdown)[0].substr(2);
      var hash = '#' + firstLine.replace(/[^\w\s!-]/gi, '').replace(/ /g, '-').toLowerCase();
      var value = JSON.stringify(rules[rulenameOrig], null, 2);

      tableOfContents += '1. [' + rulenameOrig + ']' + '(' + hash + ')' + '\n';

      md += '\n## ' + firstLine.substr(0, 1).toUpperCase() + firstLine.substr(1) + '\n\n';
      md += '**Key:** ' + rulenameOrig + ' ([docs](' + RULE_LINKS[pluginName].start + rulename + RULE_LINKS[pluginName].end + '))\n\n';
      md += '**Value:** ';

      if (value.length > 1) {
        md += '\n';
        md += '```javascript\n' + value + '\n```\n';
      } else {
        md += '``' + value + '``\n';
      }

      md += '\n**[&#8679; back to top](#table-of-contents)**\n';

      bar.tick();
    }

    md = tableOfContents + md + LICENSE;

    bar.tick();

    fs.writeFileSync(path.join(__dirname, 'docs', name + '.md'), md, 'utf8');

    bar.tick();
  }

  fs.writeFileSync(path.join(__dirname, 'docs', 'README.md'), readme, 'utf8');

  bar.tick();
}

main();
