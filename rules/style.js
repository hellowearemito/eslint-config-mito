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
    'computed-property-spacing': 'off',
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-length': 'off',
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'lines-around-comment': 'off',
    'linebreak-style': 'error',
    'max-nested-callbacks': 'off',
    'new-cap': ['error', {
      'newIsCap': true
    }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'no-array-constructor': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'warn',
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
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'object-curly-spacing': 'off',
    'no-extra-parens': ['error', 'functions'],
    'one-var': ['error', 'never'],
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'quote-props': 'off',
    'quotes': ['error', 'single', 'avoid-escape'],
    'id-match': 'off',
    'padded-blocks': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'sort-vars': 'off',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'off',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']
    }],
    'wrap-regex': 'off'
  }
};
