---
title: "Git Workflow"
description: "Branching strategy, pull request guidelines, code review checklist, and tagging conventions for production Rails teams."
pubDate: 2024-01-21
tags: ["git", "code-review", "branching", "pull-request", "devops"]
canonical: https://medium.com/@sahsantoshh/git-workflow-603d7c6bfbbd
---

![Git Workflow branching diagram](https://cdn-images-1.medium.com/max/1024/1*kwZ-RUSme6eIbCCA4HCcFg.png)

## Branching

**master/main:** is production branch. This branch should be deployed as production app.

**hotfix/\*\*** branch is a quick patch for issues/bugs found in production environment. This branch should be created from **master** and merged to **staging** and **master** with proper **tag**. After merge all other active development branches should be back merged with the fix like **develop**, **feature/\*\***, **bugfix/\*\***.

**staging** is next prod release branch with all latest features and bug fixes from develop. All tagging should be done here before creating **_PR_** to **master**.

**develop** is an active development branch where all features and bug fixes gets merged. This branch should be deployed in **dev** environment for testing.

**feature/\*\*** is a branch for a specific feature. It should be created from updated **develop** branch. After completing all work of the feature with all tests by developer, **PR** should be created against "**develop**" branch.

**bugfix/\*\***, as the name suggests, this branch is for fixing any issues/bugs found in development environment. It should be created from `develop` branch and also the PR should be created against the same branch. Never fix multiple bugs in one branch.

## Branch Access Levels

Only team leads should have direct push access to **master**, **staging** and **develop**.

## Guidelines to Follow for Pull Requests

1. Make sure your branch is updated with latest changes of **develop** branch or the branch from which this branch was created.
2. Latest changes should not **blow up** previously written tests.
3. This branch should not touch multiple issues/features/bugs. It should fix/add one and only one bug/feature.
4. Make sure required feature/bug works/fixed perfectly as per your understanding.
5. Make sure there isn't any performance issues. (For e.g.: Unoptimized queries etc.)
6. Make sure your commit message gives the proper gist of the changes. (In some scenarios where the commit message doesn't cover the gist, a clear and concise description of changelog should be written.)

## Basic Guidelines for Code Review

The following things should be kept in mind while doing code review.

1. The PR doesn't **blow up** existing features in any kind.
2. Previously written tests doesn't blow up.
3. Check for common caveats that can downgrade performance (For e.g.: Unoptimized queries, Un-indexed foreign_key etc.).
4. Make sure if this PR doesn't touch multiple issues/features/bugs.
5. Check if the changes meet the feature/bug requirements.
6. OOP concept has been followed.

## Merge Strategy

Team Member/any person reviewing PR is only responsible for approving the changes, which need to merged as soon as it is approved to the respective branch.

## Tagging Strategy

`AppName_[Major].[Minor/Feature].[Patch/Upgrade].[Date]`

**Major** — Major version is a definite release of the product. It increased when there are significant changes in functionality.

**Minor/Feature** — Minor version is incremented when only new features or major bug fixes have been added.

**Upgrade/Patch** — Upgrade refers to the replacement of a product with a newer version of product. It is incremented only when an upgrade is provided on a designated major release. Patch version starts with 0 and incremented only when the bug has been resolved.

**Date** — Release date with underscore format **mm_dd_YYYY**

Example: **Hello_1.1.0.01_04_2020**

---

*Originally published on [Medium](https://medium.com/@sahsantoshh/git-workflow-603d7c6bfbbd).*
