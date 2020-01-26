module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/recommended', '@vue/standard'],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'eqeqeq': [2, 'smart'],
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-var': 2,
    'prefer-const': 2,
    'semi': 1,
    'space-before-function-paren': [1, 'never'],
    'vue/max-attributes-per-line': [1, { 'singleline': 10, 'multiline': { 'max': 1, 'allowFirstLine': false } }],
    'vue/singleline-html-element-content-newline': 0,
  }
}
