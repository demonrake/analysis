// //第一种设置别名方法：
// const path=require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//         .set('@',resolve('./src'))
//         .set('assets',resolve('./src/assets'))
//         .set('components',resolve('./src/components'))
//         .set('views',resolve('./src/views'))
//         .set('store',resolve('./src/store'))
//         .set('router',resolve('./src/router'))
//         .set('network',resolve('./src/network'))
//         //set的第一个参数是设置的别名，第二个参数是设置的路径
//     }
// }
//第二种设置别名方法
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        // "@" :'/src',
        "assets":"@/assets",
        "components":"@/components",
        "views" :"@/views",
        "store" :"@/store",
        "network" :"@/network"
      }
    }
  }
}