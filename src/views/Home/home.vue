<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-14 16:36:06
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \ThreeNoded:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Home\home.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <!-- 头部区域 -->
    <div class="nav">
      <h1>小白居家生活</h1>
      <div class="swipe">
        <img src="../../assets/lun.jpg" alt="" srcset="" />
      </div>
    </div>

    <!-- 功能区域  -->
    <van-grid class="options" column-num="5">
      <van-grid-item
        class="single"
        icon="wap-home-o"
        text="家庭保洁"
        @click="toProductPage()"
      />
      <van-grid-item
        class="single"
        icon="brush-o"
        text="衣物护理"
        @click="toProductPage()"
      />
      <van-grid-item
        class="single"
        icon="like-o"
        text="母爱陪护"
        @click="toProductPage()"
      />
      <van-grid-item
        class="single"
        icon="setting-o"
        text="家具养护"
        @click="toProductPage()"
      />
      <van-grid-item
        class="single"
        icon="cashier-o"
        text="家电清洗"
        @click="toProductPage()"
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
        <img src="../../assets/qingjie.webp" alt="" srcset="" />
        <p>{{ item.name }}</p>
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
    };
  },
  created() {
    this.getSwiperData();
    this.getHomeProductData();
  },
  computed: {
    ...mapState("home", ["swiperData"]),
    ...mapState("product", ["homeProductData", "productDetailData"]),
  },
  methods: {
    ...mapActions("home", ["getSwiperData"]),
    ...mapActions("product", ["getHomeProductData", "getProductDetailById"]),
    // 跳转到产品页面
    toProductPage() {
      // 页面跳转
      this.$router.push({
        path: "product",
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
  background-color: #fbfaf5;
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
  color: #ffd900;
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
    width: 40%;
    height: 200px;
    margin-top: 10px;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    border-radius: 5px;
    img {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
    p {
      color: #524e4d;
      font-size: 20px;
      text-align: center;
      line-height: 45px;
    }
  }
}

footer {
  width: 100%;
  height: 60px;
}
</style>