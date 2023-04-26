// @ts-check

/**
 * @type {import('prettier').Config}
 */


const { overrides = [], ...prettierConfig } = {
    singleQuote: true,
    jsxSingleQuote: false,
    semi: true,
    printWidth: 80,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: "es5",
    bracketSameLine: false,
    useTabs: false,
    endOfLine: "lf",
    overrides: [],
};

module.exports = {
  ...prettierConfig,
  jsxSingleQuote: false,
  overrides: [
    ...overrides,
    ...[
      {
        files: "*.md",
        options: {
          singleQuote: false,
          quoteProps: "preserve",
        },
      },
    ],
  ],
};
