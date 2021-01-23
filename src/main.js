/*
 * @Author: your name
 * @Date: 2021-01-22 21:51:19
 * @LastEditTime: 2021-01-23 17:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/main.js
 */
import Vue from 'vue';
import 'lib-flexible/flexible';

import '@/style/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
