/*
 * @Author: your name
 * @Date: 2021-01-22 22:40:02
 * @LastEditTime: 2021-01-23 15:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/vue.config.js
 */
module.exports = {
  outputDir: 'kaoyan',
  chainWebpack: (config) => {
    // 配置rem布局
    config.module
      .rule('scss')
      .test(/\.scss$/)
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 37.5, remPrecision: 8 })
      .end();
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "~@/style/variables.scss";
        @import "~@/style/mixin.scss";
            `,
      },
    },
  },
};
