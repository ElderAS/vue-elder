const path = require('path')

module.exports = {
  title: 'VueElder',
  base: '/vue-elder/',
  description: 'Powerpack by Elder AS',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Author', link: 'https://elder.no' },
    ],
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: ['/getstarted/setup'],
      },
      {
        title: 'Components',
        collapsable: false,
        children: ['/components/button'],
      },
    ],
    lastUpdated: 'Last Updated',
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['node_modules'] = path.resolve('node_modules')
  },
}
