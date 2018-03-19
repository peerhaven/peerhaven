# Setup

This is a beginner friendly guide for setting up everything necessary to work on peerhaven.
If parts of this guide don't work for your system, let us know by [submitting an issue](CONTRIBUTING.md#submitting-issues)!

## Contents

- [Languages](#languages)
- [Git](#git)
- [Node.js](#nodejs)
  - [Yarn](#yarn)

## Languages

You should be familiar with:

- [JavaScript](http://javascript.info/)
- [Markdown](https://blog.ghost.org/markdown/)

## Git

[Add SSH and GPG keys to your GitHub account](https://github.com/settings/keys).
Please secure your SSH key with a passphrase; it is used for accessing GitHub.
The GPG key is for signing your commits.

To access the GitHub repositories via SSH, remember to additionally point to the origin via SSH:

`git remote set-url origin git@github.com:peerhaven/peerhaven.git`

Also, please provide your full name in commits.
Set your name and e-mail address:

- In [GitHub](https://github.com/settings/profile)
- If your using SmartGit or Sourcetree, these can be set in the repository settings

You can specify your name, e-mail address and GPG settings all in the terminal.
Omit the `--global` option if you prefer per-repository settings:

```bash
git config --global user.name "Mona Lisa"
git config --global user.email "email@example.com"

# replace following key ID with output from: gpg2 --list-secret-keys
git config --global user.signingkey <key ID>
git config --global gpg.program /usr/local/bin/gpg2 # check correct path
git config --global commit.gpgsign true
```

In SmartGit, you can add your GPG signing key in the repository settings; as GPG program you write `/usr/bin/gpg2`.
In Sourcetree, the GPG key can also be set in the repository settings; you can specify the GPG directory in `Preferences > Advanced`, like `/usr/local/bin`.

## Node.js

If you install Node with the official download, you may get into permission issues.
Instead, it is recommended to install Node with the latest version of [nvm](https://github.com/creationix/nvm#installation); this will also install npm.
[Install Yarn](https://yarnpkg.com/en/docs/install) on top.

### Yarn

Install all dependencies:

```bash
yarn install
```

## Ruby

Install Ruby via the recommended way of your OS.

### Markdown lint tool

```bash
gem install mdl
```
