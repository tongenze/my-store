const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: process.env.VUE_APP_BASE_URL, // 代理服务器的地址
      changeOrigin: true,
    })
  )
}
