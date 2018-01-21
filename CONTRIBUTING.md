# How to contribute

We develop peerhaven in the open because we want to be a transparent platform and to provide an easy way to integrate your bug fixes and improvements.
Community contributions are helpful and very welcome.
This document describes how you can take part in improving peerhaven.

If you haven't done this kind of thing before, check out this free Egghead video course about [how to contribute to an open source project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## Getting started

We prepared a separate document for [setting up the environment](SETUP.md).

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

## Code style

- **JavaScript**  
  We use [semistandard](https://github.com/Flet/semistandard) which is based on [standard](https://github.com/standard/standard/blob/master/docs/RULES-en.md) and adds semicolons to the rules.

## Integrating changes

Please submit an issue with your suggestion, especially if you're not part of the core team, before starting to work on code.
Let's make sure your changes are actually in line with what peerhaven is trying to achieve.
Also, check open pull requests.

We're using the [git flow](http://nvie.com/posts/a-successful-git-branching-model/) development model introduced by Vincent Driessen in 2010.

Please note that anybody with _write_ permission is supposed to push only to temporary branches (`feature`, `release` and `hotfix`); changes to `develop` and `master` branches are merged by [pull requests](https://help.github.com/articles/about-pull-requests/) after code review.

Temporary branches have hierarchical names; examples are:

- `feature/add-github-auth`
- `release/1.2.0`
- `hotfix/private-bookmark-visibility`

We are going to have 3 different types of repositories, resulting in 3 slightly varying workflows.

### APIs

Having a coherent codebase and being presumably ready to ship, a `release` branch is created from the `develop` branch, the version number following the principles of [semantic versioning 2.0.0](https://semver.org/).
Until incorporating [feature flags](https://readwrite.com/2016/01/22/staging-servers/), the code in the newly created `release` branch is being tested internally in a staging environment, at least for a week.
When code gets merged into `master`, we push the code into our production system.
From this point on, a new `release` branch may be created.

### Clients

[Semantic versioning doesn't make much sense for apps without a public API](https://grimoire.ca/dev/webapp-versions), like our web app.
So releases are named by date instead:
`release/2018-07-21`, or `release/2018-07-21a` when integrating hotfixes.
That's the only difference compared to repositories containing APIs.

### Documentation

Repositories without code, like this one, have a drastically simplified workflow.
They have no versions and only `master` has an infinite lifetime.
Commits go into temporary `content` branches, like `content/add-code-of-conduct`, and are merged into `master` by pull requests.
