module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'semistandard'
  ],

  ignorePatterns: [
    // lint hidden files as well (they are ignored with standard configuration)
    '!.*',

    '.git',
    'node_modules'
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },

  rules: {
    // allow require statements inside blocks (only if necessary)
    'global-require': 'off',

    // no file extensions in import statements
    'import/extensions': [
      'error',
      'never'
    ],

    // it seems we need this for asset loading
    'import/no-dynamic-require': 'off',

    // allow aliases
    'import/no-unresolved': 'off',

    // allow intentional console output
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'warn'
        ]
      }
    ],

    // allow in single-file components (according to HTML style guide)
    'no-multiple-empty-lines': 'off',

    // operators in multiline expressions at the beginning of the line
    'operator-linebreak': [
      'error',
      'before'
    ]
  }
};
