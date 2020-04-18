module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'nonblock-statement-body-position': 'off',
    'curly': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off'
  },
};
