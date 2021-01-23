<!--
 * @Author: BubbleTG
 * @Date: 2021-01-23 17:54:45
 * @LastEditTime: 2021-01-23 19:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/components/tab-item.vue
-->
<template>
  <a
    class="tab-item"
    :class="{ 'is-selected': $parent.value === id }"
    @click="$parent.$emit('input', id)"
  >
    <div class="tab-item-icon"><slot name="icon"></slot></div>
    <div class="tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  props: ['id'],
};
</script>

<style lang="scss" scope>
.tab-item {
  display: block;
  padding: 5px 0 6px;
  flex: 1;
  .tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
    & > * {
      display: block;
      size: 100%;
      width: 24px;
      height: 24px;
    }
  }
  .tab-item-label {
    color: inherit;
    font-size: $tab-item-font-size;
    line-height: 1;
  }
}
</style>
