<!--
 * @Author: LuZeng
 * @Date: 2021-05-10 15:59:26
 * @LastEditTime: 2022-08-08 19:09:42
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \ThreeNoded:\rjiananzhuang\WEB\WEB workspace\实训三\练习\house\briup-wisdom-order\briup-wisdom-order\src\App.vue
 * 别乱动！
-->
<template>
  <div id="app">
    <!-- 全局根组件 -->
    <!-- 只显示一个routerview 即可 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
/* 获取父元素高度 */
html,
body,
#app {
  height: 100%;
}
</style>
