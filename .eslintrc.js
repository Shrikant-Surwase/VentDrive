module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier', 'import', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is last
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, trailingComma: 'all', endOfLine: 'auto' },
    ],
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'react-native/no-inline-styles': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
