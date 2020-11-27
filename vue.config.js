module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch")
    //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
  },
  devServer: {
    proxy: {
      '/api': { //为所有服务器端接口起一个别名前缀，为了和vue脚手架中其它页面的路由地址区分
        target: `http://localhost:3000`,
        changeOrigin: true, //跨域
        pathRewrite: {
          //因为真实的服务器端地址中是不包含/api的，所以
          '^/api': '' //应该将程序中的/api删除(替换为空字符串)，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
        }
      }
    }
  }
}
