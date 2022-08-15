<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-14 15:56:16
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \ThreeNoded:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Order\order.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <p class="tittle">订单</p>
    <div class="classify">
      <van-tabs
        animated
        class="nav"
        title-active-color="#fef263"
        color="#fef263"
      >
        <van-tab class="whole w" title="全部订单">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc=""
            title="部订单"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
        <van-tab class="unpaid w" title="待支付">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc="待支付"
            title="商品标题"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
        <van-tab class="undelivered w" title="待派送">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc="待派送"
            title="商品标题"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
        <van-tab class="complete w" title="已完成">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc="已完成"
            title="商品标题"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.main {
  background-color: #fafafa;
  height: 807px;
}
.tittle {
  height: 50px;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #dcdedf;
}
.classify .nav {
  .card {
    width: 95%;
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
  }
}
</style>