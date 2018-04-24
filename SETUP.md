# Setup

This is a beginner friendly guide for setting up everything necessary to work on peerhaven.
If parts of this guide don't work for your system, let us know by [submitting an issue](CONTRIBUTING.md#submitting-issues)!

## Contents

- [Project files](#project-files)
- [Node.js](#nodejs)
  - [Yarn](#yarn)
- [Ruby](#ruby)
  - [Gems](#gems)

## Project files

To get started, download or clone the respective repository's project files.

**Note**:
This very repository is not needed for running peerhaven.

## Node.js

If you install Node with the official download, you may get into permission issues.
Instead, it is recommended to install Node with the latest version of [nvm](https://github.com/creationix/nvm#installation); this will also install npm.
[Install Yarn](https://yarnpkg.com/en/docs/install) on top.

### Yarn

Install all dependencies from the project root directory:

```bash
yarn install
```

## Ruby

Install Ruby via the recommended way of your OS.

**Note**:
You may skip this if you're not planning to contribute.

### Gems

```bash
gem install mdl
```
