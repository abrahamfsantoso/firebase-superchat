module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    quotes: ['error', 'single'],
  },
  parser: 'babel-eslint',
};
