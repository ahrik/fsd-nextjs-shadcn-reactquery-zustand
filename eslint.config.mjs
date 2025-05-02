import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReact from 'eslint-plugin-react';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPrettier from 'eslint-plugin-prettier'; // подключаем плагин prettier

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

// Базовая конфигурация Next.js
const baseConfig = [...compat.extends('next/core-web-vitals', 'next/typescript')];

const additionalRules = {
  files: ['**/*.{ts,tsx,js,jsx}'],
  plugins: {
    import: importPlugin,
    'react-hooks': eslintReactHooks,
    react: eslintReact,
    'react-refresh': eslintReactRefresh,
    'jsx-a11y': jsxA11yPlugin,
    'simple-import-sort': simpleImportSort,
    prettier: eslintPrettier, // добавляем плагин prettier
  },
  languageOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-undef': 'warn',
    'newline-before-return': 'warn',
    'react/display-name': 'off',
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-extra-semi': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          [
            '^react',
            '^zustand',
            '^@\\w',
            '^@?\\w',
            '^@pages(/.*|$)',
            '^@widgets(/.*|$)',
            '^@features(/.*|$)',
            '^@entities(/.*|$)',
            '^@shared(/.*|$)',
            '^',
            '^\\.',
          ],
          ['^.+\\.scss$'],
          ['^.+\\./styles.tsx$'],
        ],
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'warn',
    'no-restricted-imports': ['error', { patterns: ['../*', './../*'] }],
    // Правило для проверки формата через Prettier:
    'prettier/prettier': 'error',
  },
  ignores: ['node_modules', 'dist', '.editorconfig', 'src/shared/api/generated_api.ts', 'postcss.config.cjs'],
};

const eslintConfig = [...baseConfig, additionalRules];

export default eslintConfig;
