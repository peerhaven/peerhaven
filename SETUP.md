# Setup

This is a beginner friendly guide for setting up everything necessary to work on peerhaven.

## Languages

- [JavaScript](http://javascript.info/)
- [Markdown](https://blog.ghost.org/markdown/)

## Software

We work with [elementary](https://elementary.io/).
If parts of this guide don't work for your system, let us know by [submitting an issue](CONTRIBUTING.md#submitting-issues)!

Our web UI is mainly tested with [Firefox](https://www.mozilla.org/en-US/firefox/) and [Chrome](https://www.google.com/chrome/browser/desktop/index.html).

### Atom

For writing, we use [Atom](https://flight-manual.atom.io/getting-started/sections/why-atom/), along with the following packages:

- [Atom IDE](https://ide.atom.io/)
- [linter-js-standard](https://atom.io/packages/linter-js-standard), with _semistandard_ style selected, according to our code style requirements
- [Minimap](https://atom.io/packages/minimap) with [git-diff plugin](https://atom.io/packages/minimap-git-diff)
- [Teletype](https://teletype.atom.io/)

If you're looking for a nice coding font, you may want to check out [Ubuntu Mono](https://fonts.google.com/specimen/Ubuntu+Mono).

### Git

[Add SSH and GPG keys to your GitHub account](https://github.com/settings/keys).
Please secure your SSH key with a passphrase; it is used for accessing GitHub.
The GPG key is for signing your commits.

To access the GitHub repositories via SSH, remember to additionally point to the origin via SSH:

`git remote set-url origin git@github.com:peerhaven/peerhaven.git`

Working in the terminal is great.
If you're looking for a good Git GUI, we can recommend [SmartGit](https://www.syntevo.com/smartgit/).
You can add your GPG signing key in the repository settings; as GPG program you write `/usr/bin/gpg2`.
