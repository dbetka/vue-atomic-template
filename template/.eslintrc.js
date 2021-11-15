module.exports = {
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'standard',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    amd: true,
  },
  parserOptions: {
    ecmaVersion: 'es2021',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'eqeqeq': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    'no-useless-call': 'warn',
    'no-useless-escape': 'warn',
    'padded-blocks': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'quote-props': [
      'error',
      'consistent',
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    '@typescript-eslint/no-var-requires': 0,
  },
}
