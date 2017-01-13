'use strict';

const xtend = require('xtend');
const syncRequest = require('sync-request');
const fs = require('fs');
const path = require('path');
const ProgressBar = require('progress');
const packageJson = require('./package.json');

const EXTEND_FILES = [{
  name: 'default',
  path: './index.js'
}, {
  name: 'legacy',
  path: './legacy.js'
}];

const now = new Date();
const yyyy = now.getFullYear();

let dd = now.getDate();
let mm = now.getMonth() + 1;

if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}

const GENERATED_DATETIME = `${yyyy}-${mm}-${dd} (v${packageJson.version})`;

const README_START = `# [eslint](http://eslint.org)-config-mito documentation\n> Generated: ${GENERATED_DATETIME}\n\n`;

const LICENSE = `\n## License\nMIT © ${now.getFullYear()} Mito (info@mito.hu)`;

const ESLINT_DOCS_URL = {
  default: 'https://raw.githubusercontent.com/eslint/eslint/master/docs/rules/',
  import: 'https://raw.githubusercontent.com/benmosher/eslint-plugin-import/master/docs/rules/'
};

const RULE_LINKS = {
  default: {
    start: 'http://eslint.org/docs/rules/',
    end: ''
  },
  import: {
    start: 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
    end: '.md'
  }
};

function isExists(path) {
  try {
    fs.accessSync(path, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function parseFile(contents) {
  let rules = contents.rules || {};

  if (contents.extends) {
    for (let i = 0, l = contents.extends.length; i < l; i++) {
      const module = require(contents.extends[i]); // eslint-disable-line global-require
      const subrules = parseFile(module);
      rules = xtend(rules, subrules);
    }
  }

  return rules;
}

function getMarkdownByRulename(pluginName, rulename) {
  const cachePath = path.join(__dirname, '.cache');
  let body = null;

  if (!isExists(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  const pluginDocsPath = path.join(cachePath, pluginName);

  if (!isExists(pluginDocsPath)) {
    fs.mkdirSync(pluginDocsPath);
  }

  const filename = `${rulename}.md`;
  const filePath = path.join(cachePath, pluginName, filename);

  if (isExists(filePath)) {
    body = fs.readFileSync(filePath, 'utf8');
  } else {
    const res = syncRequest('GET', `${ESLINT_DOCS_URL[pluginName]}${rulename}.md`);
    body = res.getBody('utf8');
    fs.writeFileSync(filePath, body, 'utf8');
  }

  return body;
}

function main() {
  let md = '';
  let tableOfContents = '';
  let readme = README_START;
  let total = 0;

  let j = EXTEND_FILES.length;
  while (j--) {
    const module = require(EXTEND_FILES[j].path); // eslint-disable-line global-require
    EXTEND_FILES[j].rules = parseFile(module);
    total += Object.keys(EXTEND_FILES[j].rules).length;
  }

  const bar = new ProgressBar('generate documentation [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 50,
    total: total + 10
  });

  for (let i = 0, l = EXTEND_FILES.length; i < l; i++) {
    const item = EXTEND_FILES[i];
    const { name, rules } = item;

    readme += `* [\`${name}\` configurations](${name}.md)\n`;

    bar.tick();

    if (i === (l - 1)) {
      readme += LICENSE;
      bar.tick();
    }

    md = '';

    tableOfContents = `# [eslint](http://eslint.org)-config-mito \`${name}\` configurations\n> Generated: ${GENERATED_DATETIME}\n\n## Table of contents\n\n`;

    bar.tick();

    for (const rulenameOrig in rules) {
      let pluginName = 'default';
      let rulename = rulenameOrig;

      if (rulename.indexOf('/') !== -1) {
        [pluginName, rulename] = rulename.split('/');
      }

      const ruleMarkdown = getMarkdownByRulename(pluginName, rulename);
      const firstLine = /^.?(.*)/g.exec(ruleMarkdown)[0].substr(2);
      const hash = `#${firstLine.replace(/[^\w\s!-]/gi, '').replace(/ /g, '-').toLowerCase()}`;
      const value = JSON.stringify(rules[rulenameOrig], null, 2);

      tableOfContents += `1. [${rulenameOrig}](${hash})\n`;

      md += `\n## ${firstLine.substr(0, 1).toUpperCase() + firstLine.substr(1)}\n\n`;
      md += `**Key:** ${rulenameOrig} ([docs](${RULE_LINKS[pluginName].start}${rulename}${RULE_LINKS[pluginName].end}))\n\n`;
      md += '**Value:** ';

      if (value.length > 1) {
        md += '\n';
        md += `\`\`\`javascript\n${value}\n\`\`\`\n`;
      } else {
        md += `\`\`${value}\`\`\n`;
      }

      md += '\n**[&#8679; back to top](#table-of-contents)**\n';

      bar.tick();
    }

    md = tableOfContents + md + LICENSE;

    bar.tick();

    fs.writeFileSync(path.join(__dirname, 'docs', `${name}.md`), md, 'utf8');

    bar.tick();
  }

  fs.writeFileSync(path.join(__dirname, 'docs', 'README.md'), readme, 'utf8');

  bar.tick();
}

main();
