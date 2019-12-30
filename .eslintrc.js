module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    // 'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/html-self-closing": 2,
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'no-var': 2,
    'prefer-const': 2,
    eqeqeq: [2, 'smart'],
    'indent': [2, 2, {'SwitchCase': 1}],
    'quotes': ['error', 'single'],
    'space-before-function-paren': [2, 'never'],
    'no-undef': 0,
    'vue/html-closing-bracket-newline': [2, {
      'singleline': 'never',
      'multiline': 'always'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
