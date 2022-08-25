<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-25 19:42:01
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Order\order.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <!-- <p class="tittle" style="color: #727171">订单</p> -->
    <div class="classify">
      <van-tabs
        animated
        class="nav"
        title-active-color="#EF9D00"
        color="#EF9D00  "
      >
        <van-tab class="unpaid w" title="购物车">
          <!-- 自定义商品卡片 -->
          <div
            class="product_card card"
            v-for="item in cartList"
            :key="item.id"
          >
            <div class="card_left">
              <img :src="item.photo" alt="" />
            </div>
            <div class="card_right">
              <div class="cartRight_top">
                <h3>{{ item.name }}</h3>
                <span @click="deleteItem(item.name)">删除</span>
              </div>
              <div class="cartRight_center">
                {{ item.introduce }}
              </div>
              <div class="cartRight_footer">
                <span>￥{{ item.price }}</span>
                <div class="num">
                  <van-stepper v-model="item.num" bind:change="onChange " />
                </div>
              </div>
            </div>
          </div>
          <!-- 结算底层栏目 -->
          <van-submit-bar
            class="settlement"
            :price="settlement"
            button-text="结算"
            bind:submit="onSubmit"
            style="position: absolute"
          />
        </van-tab>
        <van-tab class="whole w" title="待发货">
          <!-- 自定义商品卡片 -->
          <div
            class="product_card card"
            v-for="item in orderList"
            :key="item.id"
          >
            <div class="card_left">
              <img :src="item.photo" alt="" srcset="" />
            </div>
            <div class="card_right">
              <div class="cartRight_top">
                <h3>{{ item.name }}</h3>
                <p>×{{ item.num }}</p>
              </div>
              <div class="cartRight_center">
                {{ item.introduce }}
              </div>
              <div class="cartRight_footer">
                <span>￥{{ item.price }}</span>
                <div class="num">
                  <button @click="confirmReceipt(item)">确认收货</button>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab class="complete w" title="已完成">
          <!-- 自定义商品卡片 -->
          <div
            v-for="item in completedList"
            :key="item.index"
            class="product_card card"
          >
            <div class="card_left">
              <img :src="item.photo" alt="" srcset="" />
            </div>
            <div class="card_right">
              <div class="cartRight_top">
                <h3>{{ item.name }}</h3>
                <span>删除</span>
              </div>
              <div class="cartRight_center">
                {{ item.introduce }}
              </div>
              <div class="cartRight_footer">
                <span>￥{{ item.price }}</span>
                <span style="color: #adadad; font-size: 18px"
                  >×{{ item.num }}</span
                >
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { get, post } from "@/http/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      orderAll: [],
      value: 1,
      cartList: [],
      completedList: [],
      orderList: [],
    };
  },
  created() {
    this.SET_UserName();
    // 查询未收货信息
    this.getOrderList();
    // 查询购物车信息
    this.getcartList();
    // 查询已完成订单信息
    this.getCompleted();
  },
  computed: {
    // ...mapState("order", ["orderList"]),
    ...mapState("order", ["userName"]),
    // ...mapState("order", ["cartList"]),
    settlement() {
      let sum = 0;
      this.cartList.forEach((item) => {
        sum += Number(item.price) * item.num;
      });
      return sum * 100;
    },
  },
  methods: {
    ...mapMutations("order", ["SET_UserName"]),
    ...mapActions("order", ["getOrderListData"]),
    // ...mapActions("order", ["getCartList"]),

    // 查询购物车订单信息
    async getcartList() {
      let params = {
        username: this.userName,
      };
      let res = await get("/order/findCart", params);
      let { data } = res.data;
      data = JSON.parse(data);
      this.cartList = data;
    },

    // 查询未发货订单信息
    async getOrderList() {
      let params = {
        username: this.userName,
      };
      // this.getOrderListData(params);
      let res = await get("/order/findAll", params);
      let { data } = res.data;
      data = JSON.parse(data);
      this.orderList = data;
    },

    // 购物车删除商品
    async deleteItem(proName) {
      let params = {
        username: this.userName,
        proname: proName,
      };
      let res = await get("/order/delete", params);
      let { data } = res;
      if (data.message == "删除成功") {
        this.getcartList();
        Toast.success("删除成功");
      }
    },

    // 确认收货
    async confirmReceipt(item) {
      let params = {
        username: this.userName,
        confirm: JSON.stringify(item),
      };
      let res = await get("/order/confirm", params);
      if (res.data.message == "收货成功") {
        this.getOrderList();
        this.getCompleted();
      }
      Toast.success("收货成功");
    },

    // 查询已完成信息
    async getCompleted() {
      let params = {
        username: this.userName,
      };
      let res = await get("/order/completed", params);
      this.completedList = JSON.parse(res.data.data);
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
  .unpaid {
    position: relative;
    height: 803px;
    .settlement {
      position: absolute;
    }
  }
  .product_card {
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    height: 170px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    .card_left {
      background-color: skyblue;
      width: 140px;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card_right {
      width: 200px;
      height: 140px;
      margin-left: 15px;
      div {
      }
      .cartRight_top {
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h3 {
          display: inline-block;
        }
        span {
          // border: 1px solid #ef9d00;
          display: inline-block;
          border-radius: 5px;
          // color: #c2c4c5;
          width: 50px;
          text-align: center;
          box-shadow: 0 0 5px 0 rgb(191, 179, 221);
        }
      }
      .cartRight_center {
        margin-top: 10px;
        height: 60px;
        // 处理文字自动换行
        width: inherit;
        white-space: normal;
        word-break: break-all;
        word-wrap: break-word;
        // 设置超出(一行超出省略为三个点)
        overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
      }
      .cartRight_footer {
        margin-top: 10px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 24px;
          color: #e2041b;
        }
        .num {
          // margin-top: 2px;
          button {
            height: 30px;
            background-color: #fff;
            border: 1px solid #ec6800;
            color: #ec6800;
            border-radius: 5px;
          }
        }
      }
    }
  }
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