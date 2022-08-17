<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-17 11:04:17
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Product\product.vue
 * 别乱动！
-->
<template>
  <div>
    <div class="header">
      <van-sticky>
        <van-nav-bar
          :title="name"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
    </div>
    <div class="foodContent">
      <div class="categorySideBar">
        <van-sidebar @change="onChange">
          <van-sidebar-item />
        </van-sidebar>
      </div>
      <div class="productList">
        <van-card num="2" />
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
      id: 111,
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
    onChange(index) {
      // console.log(this.categoryData[index].id);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.van-sidebar {
  width: 150px;
  text-align: center;
  font-size: 20px;
}
.van-sidebar-item {
  font-size: 18px;
}
.foodContent {
  display: flex;
  height: calc(100vh - 100px);
}
.foodContent .categorySideBar {
  width: 150px;
  resize: horizontal;
  overflow: auto;
}
.foodContent .productList {
  flex: 1;
  overflow-y: auto;
  position: relative;
}
</style>