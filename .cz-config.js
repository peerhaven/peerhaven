'use strict';

module.exports = {
  allowBreakingChanges: ['feat', 'fix', 'revert', 'wip'],
  allowCustomScopes: true,
  footerPrefix: '>',

  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the scope of this change (optional):',
    customScope: 'Denote the scope of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense summary of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: "close #31, close #34":\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  types: [
    {
      name: 'build:    Changes that affect the build system or external dependencies',
      value: 'build'
    },
    {
      name: 'chore:    Maintenance (e.g. merging)',
      value: 'chore'
    },
    {
      name: 'ci:       Changes to CI configuration files and scripts',
      value: 'ci'
    },
    {
      name: 'docs:     Documentation only changes',
      value: 'docs'
    },
    {
      name: 'feat:     Adding (to) a feature',
      value: 'feat'
    },
    {
      name: 'fix:      A bug fix',
      value: 'fix'
    },
    {
      name: 'perf:     A code change that improves performance',
      value: 'perf'
    },
    {
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
      value: 'refactor'
    },
    {
      name: 'revert:   Revert to a commit',
      value: 'revert'
    },
    {
      name: 'style:    Changes that do not affect the meaning of the code',
      value: 'style'
    },
    {
      name: 'test:     Adding missing tests or correcting existing tests',
      value: 'test'
    },
    {
      name: 'wip:      Work in progress',
      value: 'wip'
    }
  ]
};
