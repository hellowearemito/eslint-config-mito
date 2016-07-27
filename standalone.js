// Standalone
module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/standalone'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  }
};
