const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://codercba.com:5000',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
          secure: false
        }
      },
      host: '0.0.0.0'
    },
    plugins: [
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver(), IconsResolver({})]
      }),
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver(), IconsResolver()]
      }),
      require('unplugin-icons/webpack')({
        autoInstall: true
      })
    ]
  }
})
