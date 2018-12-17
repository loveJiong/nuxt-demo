module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/attributes-order': 'off', // .vue文件属性顺序 v-for v-if
    "vue/no-side-effects-in-computed-properties": 'off', // 单向影响
    "vue/max-attributes-per-line": 'off', // vue组件每个属性一行
    "vue/html-self-closing": 'off', // html自关闭 <YourComponent/>
    "vue/require-default-prop": 'off', // vue属性需要缺省值
    'indent': 'off',
    'no-extend-native': [
      'error',
      { 'exceptions': ['Date', 'String', 'Array']}
    ],
    'no-restricted-globals': 'off',
    'no-console': 'off',
    'no-multi-assign': 'off',
    'no-empty': ['error',
      { 'allowEmptyCatch': true }
    ],
    'max-len': [ 2,
      150, {
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'dev' ? 'off' : 'error',
    'no-plusplus': 'off',
    'no-new': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'radix': ['error', 'as-needed'],
    'global-require': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'quote-props': ['error', 'as-needed', {
      'unnecessary': false
    }],
    'eqeqeq': 'off',
    'prefer-destructuring': 'off',
    "class-methods-use-this": "off",
  }
}
