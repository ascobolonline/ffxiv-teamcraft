# ffxiv-teamcraft

[![GitHub Release Date](https://img.shields.io/github/release-date/Supamiu/ffxiv-teamcraft.svg)](https://github.com/Supamiu/ffxiv-teamcraft/releases)
![Github Downloads](https://img.shields.io/github/downloads/Supamiu/ffxiv-teamcraft/total.svg)
[![GitHub issues](https://img.shields.io/github/issues/Supamiu/ffxiv-teamcraft.svg)](https://github.com/Supamiu/ffxiv-teamcraft/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Supamiu/ffxiv-teamcraft.svg)](https://github.com/Supamiu/ffxiv-teamcraft/pulls)
[![Discord](https://img.shields.io/discord/355013337748209665.svg)](https://discord.gg/r6qxt6P)

Collaborative crafting tool for Final Fantasy XIV

https://ffxivteamcraft.com

Discord for support, bugs discussion and contributors: https://discord.gg/r6qxt6P

## Development

[![Codecov](https://img.shields.io/codecov/c/github/Supamiu/ffxiv-teamcraft.svg?branch=staging)](https://codecov.io/github/Supamiu/ffxiv-teamcraft?branch=staging)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitHub license](https://img.shields.io/github/license/Supamiu/ffxiv-teamcraft.svg)](https://github.com/Supamiu/ffxiv-teamcraft/blob/staging/LICENSE)


### Prepare your environment
* Install [Node.js](http://nodejs.org/) (>= 8.9 and <10) and NPM (>=5.3)
* Install local dev dependencies: `npm install` while current directory is this repo

### Live Development Server

Simply run `npm start` to start a live server with file watcher.

## Contributing

### Branch names

When contributing to main repository, you'll notice that branche names follow a given pattern,
this pattern is the following: `<branch-type>/<short-description>`.

Example: `feat/commission-history-tab` would be a branch that adds a commission history tab.

We're using gitflow for this, more informations on [https://github.com/nvie/gitflow](https://github.com/nvie/gitflow)

### Commit Messages
 The commit messages are checked by a pre-commit git hook, meaning that if they don't meet the requirements, 
 your commit will not be created.
 
 A commit message should follow this structure:
 ```
    <type>(<optional context>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>
 ```
 
 Only the first line is mandatory, the rest is optional.
 
 Types are the ones used by [standard-version](https://github.com/conventional-changelog/standard-version):
 
 - **feat** - New feature
 - **fix** - Bug fix
 - **docs** - Documentation-related
 - **style** - Style-related
 - **refactor** - Refactoring of a code piece/feature
 - **perf** - Performance optimization
 - **test** - Tests-related
 - **build** - Build-related
 - **ci** - Continuous Integration-related
 - **chore** - Changes that are not needed to be displayed in the changelog
 - **revert** - Commit reverts
 
 The optional context parameter (the part between parenthesis) is used to provide context
 easily inside the changelog, to avoid having to append "inside page blabla" at the end of the message.
 
 Context values can be any of the major features:
 
  - simulator
  - profile
  - search
  - commissions
  - alarms
  - gathering-locations
  - public-lists
  - pricing
 
 Examples:
 
 `fix(simulator): byregots blessing now working as intended`
 
 ```
 fix: need latest rxjs
 
 For our http calls, rxjs can make us save a lot of time, it had to be updated.
 ```

## License

MIT
