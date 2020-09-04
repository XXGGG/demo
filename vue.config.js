module.exports = {
    publicPath: "./",
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    // pages:{ type:Object,Default:undfind }
    assetsDir: "./",
    // 开发服务 - 跨域请求 - 代理
    devServer: {
      proxy: {
        '/api' : {
          target : 'http://localhost:8080',
           // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          ws : true,
          changeOrigin: true,
          pathRewrite: {
            '^/api' : '/pubulic/json'
            // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
          }
        }
      }
    }
}