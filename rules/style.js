// Style
module.exports = {
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'indent': ['error', 4, {
      'SwitchCase': 1
    }],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': ['error', {
      'properties': 'never'
    }],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-names': 'off',
    'func-style': ['off', 'expression'],
    'id-length': 'off',
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'lines-around-comment': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-nested-callbacks': 'off',
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
    }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'no-array-constructor': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 1
    }],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {
      allowAfterThis: false
    }],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-extra-parens': ['error', 'functions'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off',
    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: false,
      numbers: false
    }],
    'quotes': ['error', 'single', {
      avoidEscape: true
    }],
    'id-match': 'off',
    'padded-blocks': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'sort-vars': 'off',
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true
        },
        throw: {
          after: true
        },
        case: {
          after: true
        }
      }
    }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {}
    }],
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!']
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: false
      }
    }],
    'wrap-regex': 'off',
    'max-depth': ['off', 4],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'no-bitwise': 'error',
    'no-plusplus': 'off',
    'block-spacing': ['error', 'always'],
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      }
    }],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],
    'id-blacklist': 'off',
    'jsx-quotes': ['off', 'prefer-double'],
    'line-comment-position': ['off', {
      position: 'beside',
      ignorePattern: '',
      applyDefaultPatterns: true
    }],
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always'
    }],
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-statements-per-line': ['off', {
      max: 1
    }],
    'multiline-ternary': ['off', 'never'],
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4
    }],
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-negated-condition': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-tabs': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['off', {
      ObjectExpression: {
        minProperties: 0,
        multiline: true
      },
      ObjectPattern: {
        minProperties: 0,
        multiline: true
      }
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    'require-jsdoc': 'off',
    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true
    }],
    'unicode-bom': ['error', 'never']
  }
};
