module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
  ],
  rules: {
    // Импорт правил Prettier
    'prettier/prettier': ['error'],
    'no-debugger': ['warn'],

    // Правила Vue
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-indent': ['error'],
    'vue/html-closing-bracket-newline': ['error'],

    // Правила TS
    '@typescript-eslint/ban-ts-ignore': ['warn'],

    // Выключил, потому что ругается на расширение существующих интерфейсов в *.d.ts файлах
    // '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    '@typescript-eslint/interface-name-prefix': ['warn'],
    '@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
