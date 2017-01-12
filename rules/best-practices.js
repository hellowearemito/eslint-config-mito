// Best practices
module.exports = {
  'rules': {
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': ['off', 11],
    'class-methods-use-this': ['error', {
      exceptMethods: []
    }],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': ['error', {
      commentPattern: '^no default$'
    }],
    'dot-notation': ['error', {
      'allowKeywords': true
    }],
    'dot-location': 'off',
    'eqeqeq': 'error',
    'guard-for-in': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {
      exceptions: []
    }],
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-warning-comments': ['off', {
      'terms': ['todo', 'fixme', 'xxx'],
      'location': 'start'
    }],
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'warn',
    'no-with': 'error',
    'handle-callback-err': 'warn',
    'radix': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'yoda': ['error', 'never', {
      'exceptRange': true
    }],
    'no-alert': 'warn',
    'no-extra-label': 'error',
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'require-await': 'error',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],
  }
};
