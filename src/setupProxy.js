const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "服务器名:端口",
            changeOrigin: true,
            pathRewrite: {'^/api': ''}

        })
    )

};