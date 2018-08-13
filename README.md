[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/ElderAS/vue-elder.svg?branch=master&style=flat-square)](https://travis-ci.org/ElderAS/vue-elder)
[![npm](https://img.shields.io/npm/dt/vue-elder.svg?style=flat-square)](https://www.npmjs.com/package/vue-elder)
[![npm](https://img.shields.io/npm/v/vue-elder.svg?style=flat-square)](https://www.npmjs.com/package/vue-elder)
![npm](https://img.shields.io/npm/l/vue-elder.svg?style=flat-square)

# vue-elder

## Setup

### Install package

```
npm install --save vue-elder
```

### Override default colors, etc...

Regular webpack

```js
// webpack.config.js -> module.rules
{
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // you can also read from a file, e.g. `variables.scss`
        data: `$color: red;`
      }
    }
  ]
}
```

Vue-cli

```js
//vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // you can also read from a file, e.g. `variables.scss`
        data: `$color: red;`,
      },
    },
  },
}
```

## Usage

```js
//Component.vue
import { ButtonComponent } from 'vue-elder'

export default {
  components: {
    ButtonComponent,
  },
}
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) Elder AS
