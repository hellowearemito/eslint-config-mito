// Variables
module.exports = {
  'rules': {
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-unused-vars': ['error', {
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-use-before-define': 'error',
    'no-restricted-globals': 'off'
  }
};
