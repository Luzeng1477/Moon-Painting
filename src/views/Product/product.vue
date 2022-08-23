<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-21 10:42:13
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Product\product.vue
 * 别乱动！
-->
<template>
  <div>
    <div class="header">
      <!-- 顶部nav导航栏 -->
      <van-sticky>
        <van-nav-bar
          :title="name"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>

      <!-- 详细商品展示 -->
      <div class="products">
        <div
          class="bigPig-zzy"
          v-for="item in productData"
          :key="item.id"
          @click="getProductDetail(item.id)"
        >
          <img :src="item.photo" alt="" />
          <p>{{ item.name }}</p>
          <span class="price">￥{{ item.price }}</span>
          <span class="collect">{{ item.pay_people }}人付款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.getProductsName();
  },
  computed: {
    ...mapState("product", ["productData"]),
  },
  methods: {
    // 调用仓库方法，根据name查询商品信息
    ...mapActions("product", ["getProductDataByProductCategoryId"]),
    // 传参name
    getProductsName() {
      let params = {
        name: this.name,
      };
      this.getProductDataByProductCategoryId(params);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.van-sidebar {
  width: 150px;
  text-align: center;
  font-size: 20px;
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
    height: 200px;
    margin-top: 10px;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    border-radius: 5px;
    background-color: #fff;
    img {
      width: 100%;
      height: 150px;
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
</style>