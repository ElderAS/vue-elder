# Setup

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
