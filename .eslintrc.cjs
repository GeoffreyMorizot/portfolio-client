module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-v-for-key': 'error',
    /*'vue/valid-v-for': 'on',
    'vue/valid-v-model': 'on',
    'vue/valid-v-on': 'on',
    'vue/valid-v-once': 'on',
    'vue/valid-v-pre': 'on',
    'vue/valid-v-show': 'on',
    'vue/valid-v-text': 'on',
    'vue/no-unused-components': 'on',
    'vue/no-unused-vars': 'on', */
  },
}
