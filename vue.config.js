const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: 'http://localhost:5000'
    proxy: {
      '/test': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/test': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
