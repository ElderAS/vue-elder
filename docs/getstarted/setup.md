# Setup

## Install package

```
npm install --save vue-elder
```

## Requirements

::: danger Important
This package and all it's components depends on an alias named **"node_modules"** which must point to the node_modules folder.
:::

```js {6}
//webpack.config.js
module.exports = {
  //...
  resovle: {
    alias: {
      node_modules: path.resolve('node_modules)
    }
  }
  //...
}
```

## Override default colors, etc...

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
