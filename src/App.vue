<!--
 * @Author: BubbleTG
 * @Date: 2021-01-22 21:51:19
 * @LastEditTime: 2021-01-23 18:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/App.vue
-->
<template>
  <div id="app">
    <footer-tab/>
  </div>
</template>
<script>
import footerTab from './components/footer-tab/footer-tab.vue';

export default {
  components: { footerTab },

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
