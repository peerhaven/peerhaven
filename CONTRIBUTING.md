# How to contribute

We develop peerhaven in the open because we want to be a transparent platform and provide an easy way to integrate your bug fixes and improvements.
Community contributions are helpful and very welcome.
This document describes how you can take part in improving peerhaven.

If you haven't done this kind of thing before, read GitHub's guide about [how to contribute to open source](https://opensource.guide/how-to-contribute/) in general (for a non-technical overview), and then check out the free Egghead video course about [how to contribute to an open source project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) (for a more technical introduction).

Please note that this project is released with a [contributor code of conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Contents

- [Non-technical contributions](#non-technical-contributions)
  + [Discussions](#discussions)
  + [Issues](#issues)
- [Languages](#languages)
  + [Coding style guides](#coding-style-guides)
- [SSH and GPG keys](#ssh-and-gpg-keys)
- [Git setup](#git-setup)
- [Contributor agreement](#contributor-agreement)
- [Integrating changes](#integrating-changes)
  + [Code](#code)
  + [Documentation](#documentation)
- [Upgrading dependencies](#upgrading-dependencies)
- [Commit message guideline](#commit-message-guideline)
  + [Format](#format)
  + [Revert](#revert)
  + [Type](#type)
  + [Scope](#scope)
  + [Subject](#subject)
  + [Body](#body)
  + [Footer](#footer)
  + [tl;dr](#tldr)

## Non-technical contributions

You don't have to be a software developer to make a valuable contribution – discussions and issues are an easy and legitimate way for improvement.

Is your feedback related to a specific piece of software, like the desktop app or a browser extension?
Then check the corresponding repository (see the README for a [list of our modules](README.md#architecture)).
If not, the general `peerhaven` repository (the one you're currently looking at) is a good place to start.

### Discussions

For questions, ideas and general feedback, have a look at our discussions pages.
If you don't find an existing discussion related to your matter, feel free to open a new discussion.
Suggestions concerning our workflow, tools and standards are welcome!

### Issues

For any problems you encounter, head over to our issues pages.
Please check existing issues to avoid creating duplicates – if you find one related to your problem, vote (with an emoji) or comment to raise awareness and show your interest.
When submitting a new bug report, please provide the steps to reproduce the problem; describe what's the expected and the actual behaviour.

## Languages

We use the following (technical) languages throughout the project:

- [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) / [SCSS](https://sass-lang.com/)
- [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [JavaScript](http://javascript.info/)
- [Markdown](https://blog.ghost.org/markdown/)

It's highly recommended that you make yourself familiar with them, depending on the parts of the project you're interested to work on.

### Coding style guides

Whenever you commit with `yarn run cz` (see [tl;dr](#tldr) below) the styles are automatically checked, but you can also check your files manually with the respective linter (from project root directory) – HTML being an exception.
Refer to our existing files to see how the styles are applied in practice.

- **CSS** / **SCSS**  
  See separate document for [SCSS style guide](style-guides/scss.md).
  Check manually with `yarn run lint-scss` (not available in repositories without style sheets).

- **HTML**  
  See separate document for [HTML style guide](style-guides/html.md).
  A linter is not being used at the moment.

- **JavaScript**  
  We use [semistandard](https://github.com/standard/semistandard) which is based on [standard](https://github.com/standard/standard/blob/master/docs/RULES-en.md) and adds semicolons to its rules.
  Check manually with `yarn run lint-js`.

- **Markdown**  
  See separate document for [Markdown style guide](style-guides/markdown.md).
  Check manually with `yarn run lint-md`.

## SSH and GPG keys

Create [SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) (for accessing GitHub) and [GPG](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) (for signing your commits) keys and secure them with a passphrase each.
[Then add the keys to your GitHub account](https://github.com/settings/keys).

The public key of every new GPG key pair you use for committing to any of peerhaven's repositories shall be added to the `keys` folder in the format of `USER.KEY_ID.pub`, where `USER` is your GitHub username and `KEY_ID` is the 16-digit identifier of your public key.

Show a list of existing key pairs:

```bash
$ gpg2 --list-keys --keyid-format LONG
/home/alice/.gnupg/pubring.kbx
-------------------------------
pub   rsa4096/7AC891336421B3D4 2020-01-02 [SC] [expires: 2024-01-01]
      0FD09AA324DB8FA0D11615D77AC891336421B3D4
uid               Alice <alice@wonderland.net>
sub   rsa4096/B4A9B1530AADA321 2020-01-02 [E] [expires: 2024-01-01]
```

To create the key file, run one of these options:

```bash
gpg2 --output alice.7AC891336421B3D4.pub --armor --export 7AC891336421B3D4
gpg2 --output alice.7AC891336421B3D4.pub --armor --export alice@wonderland.net
```

## Git setup

Make sure you have Git installed on your system.
Then clone the repository you would like to work on.

Before contributing changes, configure Git to include your full name in commits.
Set your name and e-mail address both in [GitHub](https://github.com/settings/profile) and your local repository.
You can specify your name, e-mail address and GPG settings all in the terminal.
Omit the `--global` option if you prefer per-repository settings:

```bash
git config --global user.name "Mona Lisa"
git config --global user.email "e-mail@example.com"

# replace following key ID with output from: gpg2 --list-secret-keys
git config --global user.signingkey KEY_ID
git config --global gpg.program /usr/bin/gpg2 # check correct path
git config --global commit.gpgsign true
```

## Contributor agreement

Before we can accept your contributions, we need you to sign our contributor agreement:

- If you have sole ownership of intellectual property rights to your contributions, please sign the [Individual Contributor Agreement](legal/individual-caa.md).

- If you're making contributions on behalf of your employer, please sign the [Entity Contributor Agreement](legal/entity-caa.md).

- If neither you nor your employer owns the copyright to your contributions, please submit an issue or get in touch with us at <legal@peerhaven.net>.

To sign the agreement, simply add yourself to the list of signees; the list is alphabetically sorted by GitHub username.
As your commits are signed with your GPG key, this addition counts as an electronic signature.
Do not alter the lines of other signees.

## Integrating changes

(Note:
The two repositories created before 2020 – `peerhaven` and `web` – have `master` instead of `main` branches; use whichever is present.)

Please submit an issue with your suggestion, especially if you're not part of the core team, before starting to work on code.
Let's make sure your changes are actually in line with what peerhaven is trying to achieve.
Also, check open pull requests.
Please keep code and documentation in sync and update the documentation in parallel.

We're using the [git flow](http://nvie.com/posts/a-successful-git-branching-model/) development model introduced by Vincent Driessen in 2010.

Please note that anybody with _write_ permission is supposed to push only to temporary branches (`feature`, `release` and `hotfix`); changes to `develop` and `main` branches are merged by [pull requests](https://help.github.com/articles/about-pull-requests/) after code review.
To avoid unverified merge commits (which happen if you merge via the GitHub web app) ([example](https://github.com/peerhaven/peerhaven/commit/60f1f6f6e2fc804d6761454fe6d8e79916c74802)), merge via the command line:

```bash
git checkout main # or develop
git merge --no-ff <temporary branch name>
# chore: merge pull request #<no.> from <temporary branch name>
git push
```

Then delete the temporary branch both locally and on GitHub.

If you happen to have conflicts in a pull request, resolving those from the web app results in a verified merge commit but creates a commit message that doesn't comply with our guideline ([example](https://github.com/peerhaven/web/commit/445f6b9d65d4c53e92df10b74b29b0e9187401f9)).
Therefore, merge `develop`/`main` into your temporary branch from within your Git client and resolve the conflicts there.

Temporary branches have hierarchical names; examples are:

- `feature/add-github-auth`
- `release/1.2.0`
- `hotfix/private-bookmark-visibility`

If a branch is connected to an existing issue it should be referenced like this:

`feature/#22-create-user-component`

We are going to have 2 different types of repositories, resulting in 2 varying workflows.

### Code

Having a coherent codebase and being presumably ready to ship, a `release` branch is created from the `develop` branch, the version number following the principles of [semantic versioning 2.0.0](https://semver.org/).
Until incorporating [feature flags](https://readwrite.com/2016/01/22/staging-servers/), the code in the newly created `release` branch is being tested internally in a staging environment.
When code gets merged into `main`, we push the code into our production system.
From this point on, a new `release` branch may be created.

### Documentation

Repositories without code, like this one, have a drastically simplified workflow.
They have no versions and only `main` has an infinite lifetime.
Commits go into temporary `build` or `content` branches, like `content/add-code-of-conduct`, and are merged into `main` by pull requests.

## Upgrading dependencies

To upgrade direct dependencies, use [`yarn upgrade`](https://classic.yarnpkg.com/en/docs/cli/upgrade/) or [`yarn upgrade-interactive`](https://classic.yarnpkg.com/en/docs/cli/upgrade-interactive) (optionally with the `--latest` tag).

To upgrade sub dependencies as well, delete the `node_modules` folder and the `yarn.lock` file and perform a fresh install with [`yarn install`](https://classic.yarnpkg.com/en/docs/cli/install).

Upgraded dependencies should be tested before being pushed.

## Commit message guideline

We have rules over how our Git commit messages should be formatted.
This leads to a more readable commit log that is easy to follow when looking through the project history.

Based on the [guideline by Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Format

Each commit message consists of a `header`, a `body` and a `footer`.
The `header` has a special format that includes a `type`, a `scope` and a `subject`:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory; the `body` and `footer`, and the `scope` of the `header` are optional.

Any line of the commit message should not be longer than 80 characters!
This allows the message to be easier to read on GitHub as well as in various Git tools.

Check our [commit log](https://github.com/peerhaven/peerhaven/commits/master) for examples.

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the `header` of the reverted commit.
In the `body` it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- `build`: Changes that affect the build system or external dependencies
- `chore`: Maintenance (e.g. merging)
- `ci`: Changes to CI configuration files and scripts
- `docs`: Documentation only changes
- `feat`: Adding (to) a feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: Revert to a commit
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `test`: Adding missing tests or correcting existing tests
- `wip`: Work in progress

### Scope

Possible scopes unclear for now.

### Subject

The `subject` contains a summary of the change:

- Use the imperative, present tense: `change`, not `changed` or `changes`
- Don't capitalize the first letter
- No dot at the end

### Body

Just as in the `subject`, use the imperative, present tense.
The `body` may include the motivation for the change and contrast this with previous behavior.
Use multiple lines if needed.

### Footer

The `footer` should contain any information about breaking changes and is also the place to [reference GitHub issues](https://help.github.com/articles/closing-issues-using-keywords/).

Breaking changes should start with the expression `BREAKING CHANGE:`.
The rest of the commit message is then used for this and may span multiple lines.

### tl;dr

To help you play by our rules, we set up [Commitizen](http://commitizen.github.io/cz-cli/).
Once you're ready to commit, just run:

```bash
yarn run cz
```

Commitizen will ask you several questions and generate a valid commit message for you.
Still, it helps if you have read our guideline at least once.

---

For questions / discussion, refer to these issues:

- [#1 Pick a license](https://github.com/peerhaven/peerhaven/issues/1)
- [#4 Create contributing guideline](https://github.com/peerhaven/peerhaven/issues/4)
- [#5 Add Commitizen](https://github.com/peerhaven/peerhaven/issues/5)
- [#6 Create or reference commit message guideline](https://github.com/peerhaven/peerhaven/issues/6)
- [#10 Optimize merge process](https://github.com/peerhaven/peerhaven/issues/10)
