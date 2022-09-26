module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "parser": '@babel/eslint-parser'
  },
  rules: {
    "vue/multi-word-component-names": "off"
  }
}
