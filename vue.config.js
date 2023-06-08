const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
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
      }
    },
    plugins: [
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver()]
      }),
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
