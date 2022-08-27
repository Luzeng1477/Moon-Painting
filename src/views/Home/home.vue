<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-26 20:13:07
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Home\home.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <!-- 头部区域 -->
    <div class="nav">
      <h1>Moon Painting</h1>
      <div class="swipe">
        <img src="../../assets/xuanchuan.png" alt="" srcset="" />
      </div>
    </div>

    <!-- 功能区域  -->
    <van-grid class="options" column-num="5">
      <van-grid-item
        v-for="item in text"
        :key="item.id"
        class="single"
        :icon="item.icon"
        :text="item.name"
        @click="toProductPage(item.name)"
      />
    </van-grid>

    <!-- 详细商品展示 -->
    <div class="products">
      <div
        class="bigPig-zzy"
        v-for="item in homeProductData"
        :key="item.id"
        @click="getProductDetail(item.id)"
      >
        <img v-lazy="item.photo" :key="item.photo" />
        <p>{{ item.name }}</p>
        <span class="price">￥{{ item.price }}</span>
        <span class="collect">{{ item.pay_people }}人付款</span>
      </div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      text: [
        { name: "人物插画", icon: "friends", id: 1 },
        { name: "美食插画", icon: "star", id: 2 },
        { name: "场景插画", icon: "shop-collect", id: 3 },
        { name: "动漫插画", icon: "smile", id: 4 },
        { name: "人物漫画", icon: "manager", id: 5 },
      ],
    };
  },
  created() {
    this.getHomeProductData();
  },
  computed: {
    ...mapState("product", ["homeProductData"]),
  },
  methods: {
    ...mapActions("product", ["getHomeProductData"]),
    // 跳转到产品页面
    toProductPage(name) {
      // 页面跳转
      this.$router.push({
        path: "/product",
        query: { name },
      });
    },
    // 跳至商品详情页面
    getProductDetail(id) {
      // 页面跳转
      this.$router.push({
        path: "/ProductDetail",
        query: { id },
      });
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
// 头部区域
.main {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  .nav {
    position: relative;
    width: 100%;
    height: 160px;
    background-image: linear-gradient(#ffd900, #fef263);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 1px solid #ffd900;
    h1 {
      margin-top: 15px;
      text-align: center;
      color: #fff;
    }
    .swipe {
      width: 90%;
      height: 160px;
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px 0 #aaaaaa;
      border-radius: 8px;
      img {
        height: 160px;
        width: 100%;
        border-radius: 8px;
      }
    }
  }
}

// 选项区域
.options {
  margin-top: 80px;
  color: #ef9d00;
  background-color: #fbfaf5;
}

// 商品详细介绍
.products {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .bigPig-zzy {
    overflow: hidden;
    width: 47%;
    height: 250px;
    margin-top: 10px;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    border-radius: 5px;
    background-color: #fff;
    img {
      width: 100%;
      height: 200px;
    }
    p {
      color: #524e4d;
      font-size: 14px;
      margin-left: 10px;
    }
    .price {
      color: #e92600;
      margin-left: 5px;
    }
    .collect {
      float: right;
      margin-right: 10px;
      font-size: 12px;
      color: #afafb0;
    }
  }
}

footer {
  width: 100%;
  height: 60px;
}
</style>