//导出配置 和公共的配置做一个合并
//路径起别名
module.exports = {
    //
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  
  