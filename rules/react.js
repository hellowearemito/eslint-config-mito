module.exports = {
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    'react/display-name': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-curly-spacing': 0,
    'react/jsx-no-duplicate-props': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-quotes': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    'react/wrap-multilines': 2
  }
};
