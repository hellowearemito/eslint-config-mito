7.0.0 / 2017-01-xx
==================
  - Update docgen.js
  - Upgrade packages in package.json
  - Add yarn.lock file
  - Add `array-callback-return`
  - Add `class-method-use-this`
  - Add `no-case-declarations`
  - Add `no-empty-function`
  - Add `no-global-assign`
  - Add `no-magic-numbers`
  - Remove `no-process-exit` from rules/best-practices.js
  - Add `no-alert`
  - Add `no-extra-label`
  - Add `no-return-await`
  - Add `no-self-assign`
  - Add `no-unmodified-loop-condition`
  - Add `no-unused-labels`
  - Add `no-useless-concat`
  - Add `no-useless-escape`
  - Add `no-useless-return`
  - Add `require-await`
  - Add `no-restricted-properties`
  - Add `no-restricted-globals`
  - Add `global-require`
  - Add `no-process-env`
  - Add `no-await-in-loop`
  - Add `no-prototype-builtins`
  - Add `no-template-curly-in-string`
  - Add `no-unsafe-finally`
  - Add `no-unsafe-negation`
  - Add `no-useless-rename`
  - Add `prefer-destructuring`
  - Add `prefer-numeric-literals`
  - Add `rest-spread-spacing`
  - Add `symbol-description`
  - Add `block-spacing`
  - Add `capitalized-comments`
  - Add `func-call-spacing`
  - Add `func-name-matching`
  - Add `id-blacklist`
  - Add `jsx-quotes`
  - Add `line-comment-position`
  - Add `lines-around-directive`
  - Add `max-lines`
  - Add `max-statements-per-line`
  - Add `multiline-ternary`
  - Add `newline-before-return`
  - Add `newline-per-chained-call`
  - Add `no-mixed-operators`
  - Add `no-negated-condition`
  - Add `no-restricted-syntax`
  - Add `no-tabs`
  - Add `no-whitespace-before-property`
  - Add `object-curly-newline`
  - Add `object-property-newline`
  - Add `one-var-declaration-per-line`
  - Add `require-jsdoc`
  - Add `sort-keys`
  - Add `unicode-bom`

6.0.0 / 2016-07-27
==================
  - Create .npmignore
  - Remove eslint-plugin-import from default ruleset
  - Create mito/standalone ruleset with eslint-plugin-import
  - Update documentation
  - Update docgen.js

5.0.0 / 2016-07-13
==================
  - Update README.md
  - Update eslint to version ^3.0.1
  - Update nyc to version ^7.0.0
  - Remove dependencies
  - Add eslint, eslint-plugin-import to devDependencies
  - Remove 0.10, 0.12 from travis.yml
  - Add node 4.x, and latest node version to travis.yml
  - Update docgen.js
  - Update documentation

4.1.0 / 2016-05-13
==================
  - Add code coverage tool
  - Add .travis.yml
  - Remove symlink.js
  - Remove symlink.js from .eslintignore
  - Absolute path to relative path in .eslintrc
  - Add eslint-plugin-import to npm install in README.md
  - Update documentation
  - Absolute path to relative path in index.js
  - Add `parserOptions` (`ecmaVersion`: 7, `sourceType`: 'module')
  - Absolute path to relative path in legacy.js
  - Disable `amd` in legacy.js
  - Disable `mocha` in legacy.js
  - Disable `jasmine` in legacy.js
  - Update test command, update peerDependencies
  - Enable `es6`
  - Add `import` to plugins
  - Enable `arrow-body-style`
  - Enable `arrow-spacing`
  - Enable `no-confusing-arrow`
  - Enable `no-dupe-class-members`
  - Enable `no-duplicate-imports`
  - Enable `no-new-symbol`
  - Disable `no-restricted-globals`
  - Disable `no-restricted-imports`
  - Enable `no-useless-computed-key`
  - Enable `no-useless-constructor`
  - Enable `object-shorthand`
  - Enable `prefer-arrow-callback`
  - Enable `prefer-rest-params`
  - Enable `prefer-template`
  - Disable `require-yield`
  - Disable `sort-imports`
  - Enable `template-curly-spacing`
  - Enable `yield-star-spacing`
  - Enable `import/export`
  - Disable `import/default`
  - Disable `import/extensions`
  - Disable `import/named`
  - Disable `import/namespace`
  - Disable `import/no-extraneous-dependencies`
  - Enable `import/no-unresolved`
  - Disable `import/no-named-as-default`
  - Disable `import/no-commonjs`
  - Disable `import/no-amd`
  - Disable `import/imports-first`
  - Disable `import/no-duplicates`
  - Disable `import/no-deprecated`
  - Disable `import/no-namespace`
  - Disable `import/no-named-as-default-member`
  - Disable `import/no-nodejs-modules`
  - Disable `import/order`

4.0.0 / 2016-04-25
==================
  - Disable `vars-on-top`
  - Disable `no-shadow`
  - Disable `newline-after-var`
  - Disable `no-invalid-this`
  - Update documentation

3.0.0 / 2016-04-16
==================
  - Add docgen script
  - Generate documentation
  - Disallow `curly` `multi`
  - Disable `guard-for-in`
  - Disable `no-param-reassign`
  - Enable `no-invalid-this`
  - Change `indent` `SwitchCase` to 1
  - Enable `linebreak-style`
  - Enable `no-bitwise`

2.0.2 / 2016-02-29
==================
  - Add ecmaFeatures modules

2.0.1 / 2016-02-25
==================
  - Rename postinstall.js to symlink.js
  - Remove npm `postinstall` script
  - Add `node ./symlink.js` to npm `test` script
  - Update .gitignore and remove .DS_Store

2.0.0 / 2016-02-25
==================
  - Migrating to eslint v2.0.0
  - Remove deprecated `no-empty-label`
  - Remove deprecated `space-before-keywords`, `space-after-keywords`, `space-return-throw-case` and replace `keyword-spacing`
  - Add npm `test` script `eslint configurations rules`

1.0.0 / 2016-01-14
==================
  - Release version 1.0.0

1.0.0-beta.2 / 2015-12-26
==================
  - Update readme

1.0.0-beta.1 / 2015-12-26
==================
  - Disable `func-names` rule
