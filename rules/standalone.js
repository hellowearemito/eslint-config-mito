module.exports = {
  'plugins': [
    'import'
  ],
  'rules': {
    'import/export': 2,
    'import/default': 0,
    'import/extensions': [0, 'never'],
    'import/named': 0,
    'import/namespace': 0,
    'import/no-extraneous-dependencies': [0, { 'devDependencies': false }],
    'import/no-unresolved': [2, { 'commonjs': true }],
    'import/no-named-as-default': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 0,
    'import/first': [0, 'absolute-first'],
    'import/no-duplicates': 0,
    'import/no-deprecated': 0,
    'import/no-namespace': 0,
    'import/no-named-as-default-member': 0,
    'import/no-nodejs-modules': 0,
    'import/order': [0, {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};
