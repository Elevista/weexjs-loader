# Weex js Loader
A wrapper loader of [weex-loader](https://npmjs.com/package/weex-loader) for .js file

 [![npm package](https://img.shields.io/npm/v/weexjs-loader.svg?maxAge=2592000)](https://www.npmjs.com/package/weexjs-loader)
 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install
**requires weex-loader installed**
```bash
npm i weexjs-loader
```

## When do I need it?
If you want to use weex-loader but do not want to make .vue or .we file and want to separate html,css,js files.

## Usage
Use the loader either via your webpack config or inline.

### Via webpack config

**webpack.config.js**
```js
const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'YOUR APP PATH'),
        loader: 'weexjs-loader'
      },
    ],
  }
}
```

**In your application**
```js
import component from './app.js'
```


### Inline

**In your application**
```js
import component from 'weexjs-loader!./app.js'
```

## How it works
**DIR**
```text
app/
 - app.js
 - app.html
 - app.css
assets/
 - ...
```

**app.js**
```js
export default {
  name: 'app',
  templateUrl: './app.html',
  styleUrl: './app.css',
}
```
```js
import component from 'weexjs-loader!./app.js'
```
imported component object equals below

**app.we**
```html
<script>
export default {
  name: 'app',
  templateUrl: './app.html',
  styleUrl: './app.css',
}
</script>
<template src="./app.html"></template>
<style scoped src="./app.css"></template>
```
```js
import component from 'weex-loader!./app.we'
```


## License
The MIT License (MIT)

Copyright (c) 2017 Elevista
