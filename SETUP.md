# Setup

This is a beginner friendly guide for setting up everything necessary to work on peerhaven.
If parts of this guide don't work for your system, let us know by [submitting an issue](CONTRIBUTING.md#submitting-issues)!

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

In SmartGit, you can add your GPG signing key in the repository settings; as GPG program you write `/usr/bin/gpg2`.

Also, please provide your full name in commits.
Set your name:

- In [GitHub](https://github.com/settings/profile)
- In [Git](https://help.github.com/articles/setting-your-username-in-git/)
- If your using SmartGit, the name can be set in the repository settings
