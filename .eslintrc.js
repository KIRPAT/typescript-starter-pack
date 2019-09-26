module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [ 
    'airbnb-base','prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint', 
    'prettier'
  ],
  rules: {
    "no-console": "off",
    "prettier/prettier": ["error"]
  },
};
