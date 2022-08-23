<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-23 20:12:30
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
        <van-tab class="unpaid w" title="购物车">
          <van-card
            v-for="item in cartList"
            :key="item.id"
            class="card"
            :num="item.num"
            :price="item.price"
            :desc="item.introduce"
            :title="item.name"
            :thumb="item.photo"
          />
        </van-tab>
        <van-tab class="whole w" title="待发货">
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
        <van-tab class="complete w" title="已完成">
          <van-card
            style="height: 300px"
            class="card"
            num="2"
            tag="标签"
            price="10.00"
            desc="描述信息"
            title="商品标题"
          >
            <view slot="footer">
              <button class="111">qqqqq</button>
            </view>
          </van-card>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      orderAll: [],
    };
  },
  created() {
    this.SET_UserName();
    this.getOrderList();
    this.getcartList();
  },
  computed: {
    ...mapState("order", ["orderList"]),
    ...mapState("order", ["userName"]),
    ...mapState("order", ["cartList"]),
  },
  methods: {
    ...mapMutations("order", ["SET_UserName"]),
    ...mapActions("order", ["getOrderListData"]),
    ...mapActions("order", ["getCartList"]),

    // 查询购物车订单信息
    getcartList() {
      let params = {
        username: this.userName,
      };
      this.getCartList(params);
    },

    // 查询未发货订单信息
    getOrderList() {
      let params = {
        username: this.userName,
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