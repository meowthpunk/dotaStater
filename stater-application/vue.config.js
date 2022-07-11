const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: "http://127.0.0.1:5000/",
  },
}
