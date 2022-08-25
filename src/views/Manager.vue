<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-24 09:09:20
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Manager.vue
 * 别乱动！
-->
<template>
  <div class="manager">
    <!-- 用于接受管理页面，首页，订单页，我的页面 -->
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#8430FF">
      <van-tabbar-item icon="home-o" to="/manager/home"></van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/manager/order"></van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/manager/mine"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
</style>