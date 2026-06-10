// eslint.config.mjs

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import importPluginX from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import boundaries from 'eslint-plugin-boundaries';

const paths_files_pattern = ['**/*.ts'];

const parserOptions = {
  projectService: true,
  tsconfigRootDir: import.meta.dirname,
};

export default [
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked.map((config) => ({
    ...config,
    files: paths_files_pattern,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...config.languageOptions?.parserOptions,
        ...parserOptions,
      },
    },
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: paths_files_pattern,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...config.languageOptions?.parserOptions,
        ...parserOptions,
      },
    },
  })),
  {
    files: paths_files_pattern,
    plugins: {
      boundaries,
      prettier: prettierPlugin,
      import: importPluginX,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
      'boundaries/elements': [
        {
          type: 'config',
          pattern: 'packages/config/src/**',
        },
        {
          type: 'core',
          pattern: 'packages/core/src/**',
        },
        {
          type: 'database',
          pattern: 'packages/database/src/**',
        },
        {
          type: 'app',
          pattern: 'apps/*/src/**',
        },
      ],
    },
    rules: {
      /*
       * General
       */
      eqeqeq: ['error', 'smart'],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      /*
       * TypeScript
       */
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      /*
       * Imports
       */
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          mjs: 'always',
          ts: 'never',
        },
      ],
      /*
       * Prettier
       */
      'prettier/prettier': 'error',
      /*
       * Boundaries
       */
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'app' },
              allow: [{ to: { type: 'config' } }, { to: { type: 'core' } }, { to: { type: 'database' } }],
            },
            {
              from: { type: 'database' },
              allow: [{ to: { type: 'config' } }, { to: { type: 'core' } }],
            },
            {
              from: { type: 'core' },
              allow: [],
            },
            {
              from: { type: 'config' },
              allow: [],
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**', '**/.nx/**', '**/coverage/**'],
  },
];
