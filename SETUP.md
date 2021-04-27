# Setup

This aims to be a beginner friendly guide for setting up everything necessary to run (and work on) Peerhaven.
If parts of this guide don't work for your system, let us know by [submitting an issue](CONTRIBUTING.md#non-technical-contributions)!

## Contents

- [Project files](#project-files)
- [Node.js](#nodejs)
  + [Yarn](#yarn)

## Project files

To get started, download or clone the respective repository's project files.

**Note**:
This very repository is not needed for running Peerhaven.

## Node.js

Most importantly, you need [Node.js](https://nodejs.org/).
If you install it with the official download, you may get into permission issues.
Instead, we recommend to install Node with the latest version of [nvm](https://github.com/nvm-sh/nvm) (_Node Version Manager_); this will also install [npm](https://docs.npmjs.com/about-npm) (_Node Package Manager_).

### Yarn

To interact with npm and its packages, we use [Yarn Classic](https://classic.yarnpkg.com/en/docs/getting-started); you should install that as well.
Then install the necessary dependencies from the project root directory:

```bash
yarn        # all dependencies (developing Peerhaven)
yarn --prod # production only     (running Peerhaven)
```
