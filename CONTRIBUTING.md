# How to contribute

We develop peerhaven in the open because we want to be a transparent platform and to provide an easy way to integrate your bug fixes and improvements.
Community contributions are helpful and very welcome.
This document describes how you can take part in improving peerhaven.

If you haven't done this kind of thing before, read GitHub's guide about [how to contribute to open source](https://opensource.guide/how-to-contribute/) in general (for a non-technical overview), and then check out the free Egghead video course about [how to contribute to an open source project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) (for a more technical introduction).

Please note that this project is released with a [contributor code of conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Contents

- [Submitting issues](#submitting-issues)
- [Languages](#languages)
- [Git setup](#git-setup)
- [Code style](#code-style)
- [Integrating changes](#integrating-changes)
  - [APIs](#apis)
  - [Clients](#clients)
  - [Documentation](#documentation)
- [Commit message guideline](#commit-message-guideline)
  - [Format](#format)
  - [Revert](#revert)
  - [Type](#type)
  - [Scope](#scope)
  - [Subject](#subject)
  - [Body](#body)
  - [Footer](#footer)
  - [tl;dr](#tldr)

## Submitting issues

Please take your time opening an issue, to help us respond to it in the most efficient way possible.
Some things to think about:

- Is the issue related to a specific piece of software, like the web app or our API?
  Then open the issue in the corresponding repository.
  If not, the general `peerhaven` repository is a good place.
- Please check open issues to avoid duplicates.
  If you found an existing issue, vote or comment to raise awareness and show your interest.
- If submitting a bug report, please provide the steps to reproduce the problem.
  Describe what's the expected and the actual behaviour.
- Suggestions concerning our workflow, tools and standards are welcome!

## Languages

You should be familiar with:

- [JavaScript](http://javascript.info/)
- [Markdown](https://blog.ghost.org/markdown/)

## Git setup

Make sure you have Git installed on your system and a GitHub account.

Create [SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) (for accessing GitHub) and [GPG](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) (for signing your commits) keys and secure them with a passphrase each.
[Then add the keys to your GitHub account](https://github.com/settings/keys).

Now clone the repository you would like to work on.

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

## Code style

Whenever you commit with `yarn run cz` the styles are automatically checked (for Markdown) or even applied (for JavaScript), but you can also check your files manually.

- **JavaScript**  
  We use [semistandard](https://github.com/Flet/semistandard) which is based on [standard](https://github.com/standard/standard/blob/master/docs/RULES-en.md) and adds semicolons to the rules.
  Check manually with `yarn run js-lint`.

- **Markdown**  
  See separate document for [Markdown code style rules](codestyle/markdown.md).
  Check manually with `mdl .` from project root directory.

## Integrating changes

Please submit an issue with your suggestion, especially if you're not part of the core team, before starting to work on code.
Let's make sure your changes are actually in line with what peerhaven is trying to achieve.
Also, check open pull requests.
Please keep code and documentation in sync and update the documentation in parallel.

We're using the [git flow](http://nvie.com/posts/a-successful-git-branching-model/) development model introduced by Vincent Driessen in 2010.

Please note that anybody with _write_ permission is supposed to push only to temporary branches (`feature`, `release` and `hotfix`); changes to `develop` and `master` branches are merged by [pull requests](https://help.github.com/articles/about-pull-requests/) after code review.
To avoid unverified merge commits (which happen if you merge via the GitHub web app) ([example](https://github.com/peerhaven/peerhaven/commit/60f1f6f6e2fc804d6761454fe6d8e79916c74802)), merge via the command line:

```bash
git checkout master # or develop
git merge --no-ff <temporary branch name>
# chore: merge pull request #<no.> from <temporary branch name>
git push
```

Then delete the temporary branch both locally and on GitHub.

If you happen to have conflicts in a pull request, resolving those from the web app results in a verified merge commit but creates a commit message that doesn't comply with our guideline ([example](https://github.com/peerhaven/web/commit/445f6b9d65d4c53e92df10b74b29b0e9187401f9)).
Therefore, merge `develop`/`master` into your temporary branch from within your Git client and resolve the conflicts there.

Temporary branches have hierarchical names; examples are:

- `feature/add-github-auth`
- `release/1.2.0`
- `hotfix/private-bookmark-visibility`

If a branch is connected to an existing issue it should be referenced like this:

`feature/#22-create-user-component`

We are going to have 3 different types of repositories, resulting in 3 slightly varying workflows.

### APIs

Having a coherent codebase and being presumably ready to ship, a `release` branch is created from the `develop` branch, the version number following the principles of [semantic versioning 2.0.0](https://semver.org/).
Until incorporating [feature flags](https://readwrite.com/2016/01/22/staging-servers/), the code in the newly created `release` branch is being tested internally in a staging environment, usually for a week.
When code gets merged into `master`, we push the code into our production system.
From this point on, a new `release` branch may be created.

### Clients

[Semantic versioning doesn't make much sense for apps without a public API](https://grimoire.ca/dev/webapp-versions), like our web app.
So releases are named by date instead:
`release/2018-07-21` (date of planned merge into master).
That's the only difference compared to repositories containing APIs.

### Documentation

Repositories without code, like this one, have a drastically simplified workflow.
They have no versions and only `master` has an infinite lifetime.
Commits go into temporary `content` branches, like `content/add-code-of-conduct`, and are merged into `master` by pull requests.

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

- Use the imperative, present tense: `change`, not `changed` or `changes`.
- Don't capitalize the first letter.
- No dot at the end.

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

_Commitizen_ will ask you several questions and generate a valid commit message for you.
Still, it helps if you have read our guideline at least once.
