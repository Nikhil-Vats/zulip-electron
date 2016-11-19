# Zulip Desktop Client 
[![Build Status](https://travis-ci.org/zulip/zulip-electron.svg?branch=master)](https://travis-ci.org/zulip/zulip-electron)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/zulip/zulip-electron?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/zulip-electron/branch/master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

This is an experimental replacement for the [Zulip Desktop
app](https://github.com/zulip/zulip-desktop) implemented in
[Electron](http://electron.atom.io/).

The goal is to achieve feature-compatibility with the old desktop app
and then start adding cool features like easy support for
multi-account, auto-updates etc.

## Installation

Clone the source locally:

```sh
$ git clone https://github.com/zulip/zulip-electron
$ cd zulip-electron
```
If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```
Start the app:

```sh
$ npm start
```

Start and watch changes  

```sh
$ npm run dev
```
# Making a release

To package app into an installer use command:
```
npm run dist
```
It will start the packaging process for operating system you are running this command on. Ready for distribution file will be outputted to `dist` directory.

You can create Windows installer only when running on Windows, the same is true for Linux and OSX. So to generate all three installers you need all three operating systems.


## Features

- [x] Native Notifications
- [x] Spell Checker
- [x] Keyboard Shortcuts
- Default shortcuts - <kbd>cmdOrctrl + k </kbd>
- Change Zulip Server: <kbd>cmdOrctrl + ,</kbd>
- Back: <kbd>cmdOrctrl + [</kbd>
- Forward: <kbd>cmdOrctrl + ]</kbd>
- [ ] OSX/Win/Linux installer
- [ ] Launch on OS startup
- [ ] Automatic Updates

## Contribute

If you want to contribute please make sure to read [our documentation about contributing](./CONTRIBUTING.md) first.

* [Issue Tracker](https://github.com/zulip/zulip-electron/issues)
* [Source Code](https://github.com/zulip/zulip-electron/)
