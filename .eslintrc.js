const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['**/*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@', path.resolve(__dirname, 'src')]],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      context: 'src',
      fix: true,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      outputReport: {
        filePath: path.join(__dirname, 'eslint-report.txt'),
        formatter: require('eslint/lib/cli-engine/formatters/json'),
      },
    }),
  ],
};
