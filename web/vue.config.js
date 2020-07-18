module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cn.bing.com/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  css: {
    sourceMap: true
  }
}