// Style
module.exports = {
  'rules': {
    'indent': [2, 4],
    'brace-style': [2,
      '1tbs', {
        'allowSingleLine': true
      }
    ],
    'quotes': [
      2, 'single', 'avoid-escape'
    ],
    'camelcase': [2, {
      'properties': 'never'
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'func-names': 1,
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {
      'newIsCap': true
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': [2, {
      'max': 2
    }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-extra-parens': [2, 'functions'],
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']
    }]
  }
};
