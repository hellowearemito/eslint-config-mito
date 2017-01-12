module.exports = {
  'env': {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'generators': false,
      'objectLiteralDuplicateProperties': false
    }
  },
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      'allowParens': true
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true
    }],
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-spread': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'prefer-numeric-literals': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error'
  }
};
