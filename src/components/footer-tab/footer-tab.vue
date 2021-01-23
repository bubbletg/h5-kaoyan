<!--
 * @Author: your name
 * @Date: 2021-01-23 18:18:32
 * @LastEditTime: 2021-01-23 19:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/components/footer-tab/footer-tab.vue
-->

<template>
  <div class="footer-tab">
      <tabbar :fixed="true" v-model="selected">
          <tab-item :id='1'>
              <img src="../../assets/tmp/img/icon_course@2x.png" alt="" slot="icon">
              <span>首页</span>
          </tab-item>
           <tab-item>
              <img src="../../assets/tmp/img/icon_course@2x.png" alt="" slot="icon">
              <span>首页</span>
          </tab-item>
           <tab-item>
              <img src="../../assets/tmp/img/icon_course@2x.png" alt="" slot="icon">
              <span>首页</span>
          </tab-item>
           <tab-item>
              <img src="../../assets/tmp/img/icon_course@2x.png" alt="" slot="icon">
              <span>首页</span>
          </tab-item>
      </tabbar>
  </div>
</template>

<script>
import TabItem from '@/base-components/tab-item.vue';
import tabbar from '@/base-components/tabbar.vue';

export default {
  components: { tabbar, TabItem },

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
