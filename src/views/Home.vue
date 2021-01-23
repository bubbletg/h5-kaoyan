<!--
 * @Author: your name
 * @Date: 2021-01-22 21:51:19
 * @LastEditTime: 2021-01-23 15:43:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <tabbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import tabbar from '@/components/tabbar.vue';

export default {
  name: 'Home',
  components: {
    tabbar,
  },
};
</script>
