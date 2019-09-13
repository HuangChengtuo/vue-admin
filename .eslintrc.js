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
    "vue/max-attributes-per-line": [2,
      {
        "singleline": 10,
        "multiline": {"max": 1, "allowFirstLine": false}
      }
    ],
    'no-var': 2,
    'prefer-const':2,
    eqeqeq:[2,'smart']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
