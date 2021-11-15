# {{name}}
===
> {{description}}


## Installation

### Requirements
- node v14.18.1 or higher
- npm v8.1.3 or higher

### How to prepare Intellij IDE (Webstorm) for front-end development
1. You have to get into `Settings/Languages & Frameworks/JavaScript/Webpack` and set `build/webpack.common.js` as a config file.
2. Open `Project Files` click by right button on `.eslintrc.js` file and click `Apply ESLint Code Style Rules` option.
3. You have to get into `Settings/Editor/Code Style/HTML`, find `Do not indent children of` option and add `script` tag there.

### Dependencies

```shell
npm i
```


## Development

### Devel environment

1. Run the front-end sass watcher: `npm run import:sass:watch`
2. Run the front-end builder: `npm run serve:dev:watch`

### Devel build files

1. Run the front-end sass watcher: `npm run import:sass:watch`
2. Run the front-end builder: `npm run build:dev:watch`
3. Build client files destination is in `public/`

### Production build files

1. Run the front-end sass watcher: `npm run import:sass:watch`
2. Run the front-end builder: `npm run build:prod`
3. Build client files destination is in `public/`


### Vue.js devtools
1. Remove or disable Vue.js devtools
2. Install beta version from: https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg
3. Close and reopen chrome devtools (press F12 twice).
