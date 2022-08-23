<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-23 08:58:50
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Order\order.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <p class="tittle" style="color: #727171">订单</p>
    <div class="classify">
      <van-tabs
        animated
        class="nav"
        title-active-color="#EF9D00"
        color="#EF9D00  "
      >
        <van-tab class="whole w" title="全部订单">
          <van-card
            v-for="item in orderList"
            :key="item.id"
            class="card"
            :num="item.num"
            :price="item.price"
            :desc="item.introduce"
            :title="item.name"
            :thumb="item.photo"
          />
        </van-tab>
        <van-tab class="unpaid w" title="购物车">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc="待支付"
            title="商品标题"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
        <van-tab class="undelivered w" title="待发货">
          <van-card
            v-for="item in noDelivery"
            :key="item.id"
            class="card"
            :num="item.num"
            :price="item.price"
            :desc="item.introduce"
            :title="item.name"
            :thumb="item.photo"
          />
        </van-tab>
        <van-tab class="complete w" title="已完成">
          <van-card
            class="card"
            num="2"
            price="2.00"
            desc="已签收"
            title="商品标题"
            thumb="https://v2.cn.vuejs.org/images/logo.svg"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      username: "admin",
      orderAll: [],
    };
  },
  created() {
    this.getOrderList();
  },
  computed: {
    ...mapState("order", ["orderList"]),
    ...mapState("order", ["noDelivery"]),
  },
  methods: {
    ...mapActions("order", ["getOrderListData"]),
    // 查询所有订单信息
    getOrderList() {
      let params = {
        username: this.username,
      };
      this.getOrderListData(params);
    },
  },
};
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
  background-color: #f0f0f0;
  height: 848px;
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