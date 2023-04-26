// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
// require('@ahamove/eslint-config-bases/patch/modern-module-resolution');

const regexpPatterns = {
  files: ['*.{js,jsx,jsx,tsx}'],
};

const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};

const rtlPatterns = {
  files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
};

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [
    // Hacky way to silence @yarnpkg/doctor about node_modules detection
    `**/${'node'}_modules`,
    '.cache',
    '**/.cache',
    '**/build',
    '**/dist',
    '.next',
    '.out',
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    //   /**
    //    * Custom config base for projects using typescript / javascript.
    //    */
    //   {
    //     env: {
    //       es6: true,
    //       node: true,
    //     },
    //     parser: '@typescript-eslint/parser',
    //     parserOptions: {
    //       ecmaFeatures: {
    //         jsx: true,
    //         globalReturn: false,
    //       },
    //       ecmaVersion: 2020,
    //       project: ['tsconfig.json'],
    //       sourceType: 'module',
    //     },
    //     settings: {
    //       'import/resolver': {
    //         typescript: {},
    //       },
    //     },
    //     extends: [
    //       'eslint:recommended',
    //       'plugin:@typescript-eslint/recommended',
    //       'plugin:import/recommended',
    //       'plugin:import/typescript',
    //     ],
    //     rules: {
    //       'spaced-comment': [
    //         'error',
    //         'always',
    //         {
    //           line: {
    //             markers: ['/'],
    //             exceptions: ['-', '+'],
    //           },
    //           block: {
    //             markers: ['!'],
    //             exceptions: ['*'],
    //             balanced: true,
    //           },
    //         },
    //       ],
    //       'linebreak-style': ['error', 'unix'],
    //       'no-empty-function': 'off',
    //       'import/default': 'off',
    //       'import/no-duplicates': ['error', { considerQueryString: true }],
    //       'import/no-named-as-default-member': 'off',
    //       'import/no-named-as-default': 'off',
    //       'import/order': [
    //         'error',
    //         {
    //           groups: [
    //             'builtin',
    //             'external',
    //             'internal',
    //             'parent',
    //             'sibling',
    //             'index',
    //             'object',
    //           ],
    //           alphabetize: { order: 'asc', caseInsensitive: true },
    //         },
    //       ],
    //       '@typescript-eslint/ban-tslint-comment': ['error'],
    //       '@typescript-eslint/ban-ts-comment': [
    //         'error',
    //         {
    //           'ts-expect-error': 'allow-with-description',
    //           minimumDescriptionLength: 10,
    //           'ts-ignore': true,
    //           'ts-nocheck': true,
    //           'ts-check': false,
    //         },
    //       ],
    //       '@typescript-eslint/no-explicit-any': [
    //         'error',
    //         { ignoreRestArgs: false },
    //       ],
    //       '@typescript-eslint/no-empty-function': [
    //         'error',
    //         { allow: ['private-constructors'] },
    //       ],
    //       '@typescript-eslint/no-unused-vars': [
    //         'warn',
    //         { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    //       ],
    //       '@typescript-eslint/consistent-type-exports': 'error',
    //       '@typescript-eslint/consistent-type-imports': [
    //         'error',
    //         { prefer: 'type-imports' },
    //       ],
    //       '@typescript-eslint/naming-convention': [
    //         'error',
    //         {
    //           selector: 'default',
    //           format: ['camelCase'],
    //           leadingUnderscore: 'forbid',
    //           trailingUnderscore: 'forbid',
    //         },
    //         {
    //           selector: 'variable',
    //           format: ['camelCase'],
    //           leadingUnderscore: 'allow',
    //         },
    //         {
    //           selector: ['function'],
    //           format: ['camelCase'],
    //         },
    //         {
    //           selector: 'parameter',
    //           format: ['camelCase'],
    //           leadingUnderscore: 'allow',
    //         },
    //         {
    //           selector: 'class',
    //           format: ['PascalCase'],
    //         },
    //         {
    //           selector: 'classProperty',
    //           format: ['camelCase'],
    //           leadingUnderscore: 'allow',
    //         },
    //         {
    //           selector: 'objectLiteralProperty',
    //           format: [
    //             'camelCase',
    //             // Some external libraries use snake_case for params
    //             'snake_case',
    //             // Env variables are generally uppercase
    //             'UPPER_CASE',
    //             // DB / Graphql might use PascalCase for relationships
    //             'PascalCase',
    //           ],
    //           leadingUnderscore: 'allowSingleOrDouble',
    //           trailingUnderscore: 'allowSingleOrDouble',
    //         },
    //         {
    //           selector: ['typeAlias', 'interface'],
    //           format: ['PascalCase'],
    //         },
    //         {
    //           selector: ['typeProperty'],
    //           format: ['camelCase'],
    //           // For graphql __typename
    //           leadingUnderscore: 'allowDouble',
    //         },
    //         {
    //           selector: ['typeParameter'],
    //           format: ['PascalCase'],
    //         },
    //       ],
    //     },
    //     overrides: [
    //       {
    //         // commonjs or assumed
    //         files: ['*.js', '*.cjs'],
    //         parser: 'espree',
    //         parserOptions: {
    //           ecmaVersion: 2020,
    //         },
    //         rules: {
    //           '@typescript-eslint/naming-convention': 'off',
    //           '@typescript-eslint/ban-ts-comment': 'off',
    //           '@typescript-eslint/no-explicit-any': 'off',
    //           '@typescript-eslint/no-var-requires': 'off',
    //           '@typescript-eslint/explicit-module-boundary-types': 'off',
    //           '@typescript-eslint/consistent-type-exports': 'off',
    //           '@typescript-eslint/consistent-type-imports': 'off',
    //           'import/order': 'off',
    //         },
    //       },
    //     ],
    //   },
    //   /**
    //    * Custom config base for projects using regexp rules.
    //    */
    //   {
    //     // @see https://github.com/ota-meshi/eslint-plugin-regexp
    //     extends: ['plugin:regexp/recommended'],
    //     overrides: [
    //       {
    //         // To ensure best performance enable only on e2e test files
    //         files: regexpPatterns.files,
    //         extends: ['plugin:regexp/recommended'],
    //         rules: {
    //           'regexp/prefer-result-array-groups': 'off',
    //         },
    //       },
    //     ],
    //   },
    //   /**
    //    * Custom config base for projects using react.
    //    */
    //   {
    //     env: {
    //       browser: true,
    //       es6: true,
    //       node: true,
    //     },
    //     settings: {
    //       react: {
    //         version: 'detect',
    //       },
    //     },
    //     overrides: [
    //       {
    //         files: reactPatterns.files,
    //         extends: [
    //           // @see https://github.com/yannickcr/eslint-plugin-react
    //           'plugin:react/recommended',
    //           // @see https://www.npmjs.com/package/eslint-plugin-react-hooks
    //           'plugin:react-hooks/recommended',
    //           // @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    //           'plugin:jsx-a11y/recommended',
    //         ],
    //         rules: {
    //           // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    //           'react/no-unknown-property': ['error', { ignore: ['css'] }],
    //           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    //           'react/no-unescaped-entities': ['error', { forbid: ['>'] }],
    //           'react/prop-types': 'off',
    //           'react/react-in-jsx-scope': 'off',
    //           // Fine-tune naming convention react typescript jsx (function components)
    //           // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
    //           '@typescript-eslint/naming-convention': [
    //             'warn',
    //             {
    //               selector: 'variable',
    //               format: ['camelCase', 'PascalCase'],
    //             },
    //             {
    //               selector: ['function'],
    //               format: ['camelCase', 'PascalCase'],
    //             },
    //             {
    //               selector: 'parameter',
    //               format: ['camelCase', 'PascalCase'],
    //               leadingUnderscore: 'allow',
    //             },
    //           ],
    //         },
    //       },
    //     ],
    //   },
    //   /**
    //    * Custom config base for projects using tailwind.
    //    */
    //   {
    //     env: {
    //       browser: true,
    //       es6: true,
    //       node: true,
    //     },
    //     overrides: [
    //       {
    //         files: [...reactPatterns.files],
    //         extends: [
    //           // @see https://github.com/francoismassart/eslint-plugin-tailwindcss,
    //           'plugin:tailwindcss/recommended',
    //         ],
    //         rules: {
    //           'tailwindcss/no-custom-classname': 'off',
    //           'tailwindcss/classnames-order': [
    //             1,
    //             {
    //               callees: ['classnames', 'clsx', 'ctl'],
    //               config: '',
    //               removeDuplicates: true,
    //               tags: [],
    //             },
    //           ],
    //         },
    //       },
    //     ],
    //   },
    //   /**
    //    * Custom config base for projects using react-testing-library
    //    */
    //   {
    //     env: {
    //       browser: true,
    //       es6: true,
    //       node: true,
    //     },
    //     overrides: [
    //       {
    //         // For performance enable react-testing-library only on test files
    //         files: rtlPatterns.files,
    //         extends: ['plugin:testing-library/react'],
    //       },
    //       {
    //         files: ['**/test-utils.tsx'],
    //         rules: {
    //           '@typescript-eslint/explicit-module-boundary-types': 'off',
    //           'import/export': 'off',
    //         },
    //       },
    //     ],
    //   },
    //   // Add specific rules for nextjs
    //   'plugin:@next/next/core-web-vitals',
    //   /**
    //    * Custom config base for projects using prettier.
    //    */
    //   {
    //     extends: ['prettier'],
    //     plugins: ['prettier'],
    //     rules: {
    //       'prettier/prettier': [
    //         'error',
    //         {
    //           singleQuote: true,
    //           jsxSingleQuote: false,
    //           semi: true,
    //           printWidth: 80,
    //           tabWidth: 2,
    //           bracketSpacing: true,
    //           trailingComma: 'es5',
    //           bracketSameLine: false,
    //           useTabs: false,
    //           endOfLine: 'lf',
    //           overrides: [],
    //         },
    //       ],
    //       'arrow-body-style': 'off',
    //       'prefer-arrow-callback': 'off',
    //     },
    //   },
    // ],
    // rules: {
    //   // https://github.com/vercel/next.js/discussions/16832
    //   '@next/next/no-img-element': 'off',
    //   // For the sake of example
    //   // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    //   'jsx-a11y/anchor-is-valid': 'off',
    // },
    // overrides: [
    //   {
    //     files: ['src/pages/\\_*.{ts,tsx}'],
    //     rules: {
    //       'react/display-name': 'off',
    //     },
    //   },
    //   {
    //     // TODO; remove if not necessary
    //     files: ['src/**/*.{ts,tsx}'],
    //     rules: {
    //       '@typescript-eslint/naming-convention': ['off'],
    //     },
    //   },
  ],
};
