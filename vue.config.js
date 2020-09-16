const path = require('path');
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

function pathHandler(url){
    return path.join(__dirname,url)
}

module.exports={
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      },
    devServer: {
        // contentBase: "./dist",
        // open: true
        // hot: true
        // port: 3000
        proxy:{
            '/api':{
                target:'http://59.110.226.77:3000',
                changeOrigin:true
            },
            '/index.php':{
              target:'http://www.qinqin.net',
              changeOrigin:true
            },
            '/ajax':{
              target:'https://m.maoyan.com',
              changeOrigin:true
            }
        }
    },
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',pathHandler('./src'))
        .set('Comp',pathHandler('./src/components'))
        .set('Assets',pathHandler('./src/assets'))
        .set('Directive',pathHandler('./src/directive'))
        .set('Filters',pathHandler('./src/filters'))
        .set('Pages',pathHandler('./src/pages'))
        .set('Plugins',pathHandler('./src/plugins'))
        .set('Router',pathHandler('./src/router'))
        .set('Store',pathHandler('./src/store'))
        .set('Utils',pathHandler('./src/utils'))
        .set('Mixin',pathHandler('./src/mixin'))
        .set('Api',pathHandler('./src/api'))
    }
}