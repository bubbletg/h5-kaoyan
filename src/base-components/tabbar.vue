<!--
 * @Author: BubbleTG
 * @Date: 2021-01-22 21:51:19
 * @LastEditTime: 2021-01-23 19:28:27
 * @LastEditors: Please set LastEditors
 * @Description: 底部导航
 * @FilePath: /h5-kaoyan/src/components/tabbar.vue
-->
<template>
  <div class="tabbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * tabbar
 * @module components/tabbar
 * @desc 底部tab, 依赖 tab-item
 * @param {booleam} [fixed = false] - 固定底部
 * @param {*} value - 返回 item component 传入的 id
 *
 * @example
 * <tabbar v-model="selected">
 *   <tab-item id="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </tab-item>
 * </tabbar>
 *
 * <tabbar v-model="selected" fixed>
 *   <tab-item :id="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </tab-item>
 * </tabbar>
 */
export default {
  name: 'tabbar',
  props: {
    fixed: Boolean,
    value: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabbar {
  // background-image: linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  background-color: $tabbar-background-color;
  display: flex;
  position: absolute;
  text-align: center;
  width: 100%;
  // 固定在底部
  &.is-fixed {
    position: fixed;
    z-index: 1;
  }
  > .tab-item.is-selected {
    background-color: $tabbar-tab-item-selected-background-color;
    color: $tabbar-tab-item-selected-color;
  }
}
</style>
