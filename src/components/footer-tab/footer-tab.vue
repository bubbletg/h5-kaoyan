<!--
 * @Author: your name
 * @Date: 2021-01-23 18:18:32
 * @LastEditTime: 2021-01-24 13:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/components/footer-tab/footer-tab.vue
-->

<template>
  <div class="footer-tab">
      <tabbar :fixed="true" v-model="selected">
          <tab-item :id='item.id' v-for="item in tabbarConfig" :key="item.id">
              <img :src="selected === item.id ? item.currentImg : item.imgSrc" alt="" slot="icon">
              <span>{{item.tabbbarName}}</span>
          </tab-item>
      </tabbar>
  </div>
</template>

<script>
import TabItem from '@/base-components/tab-item.vue';
import tabbar from '@/base-components/tabbar.vue';

// 引入tabbar配置
const tabbarConfig = require('@/config/tabbar-config.js');

export default {
  components: { tabbar, TabItem },
  data() {
    return {
      selected: 1, // 选择 1 默认首页
      tabbarConfig,
    };
  },

};
</script>

<style lang='scss' scope>
    .footer-tab{
        position: fixed;
        bottom: 0;
        width: 375px;
        height: 50px;
        font-weight: 500;
        overflow: hidden;
        font-family: PingFangSC-Medium, PingFang SC;
        color: $color-grey;
    }
</style>
