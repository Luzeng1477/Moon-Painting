<template>
  <div>
    <div class="header">
      <van-sticky>
        <van-nav-bar
          title="菜品分类"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
    </div>
    <div class="foodContent">
      <div class="categorySideBar">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="item in categoryData"
            :key="item.id"
            :title="item.name"
          />
        </van-sidebar>
      </div>
      <div class="productList">
        <van-card
          v-for="item in productData"
          :key="item.id"
          num="2"
          :price="2.0"
          :desc="item.description"
          :title="item.name"
          :thumb="item.photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      productCategoryId: "",
    };
  },
  created() {
    this.activeKey = this.$route.query.activeKey;
    this.productCategoryId = this.$route.query.productCategoryId;
    this.getCategoryDataVuex({ page: 1, pageSize: 200 });
    this.getProductDataVuex({
      page: 1,
      pageSize: 200,
      productCategoryId: this.productCategoryId,
    });
  },
  methods: {
    ...mapActions("category", ["getCategoryDataVuex"]),
    ...mapActions("product", ["getProductDataVuex"]),
    onChange(index) {
      // console.log(this.categoryData[index].id);
      this.getProductDataVuex({
        page: 1,
        pageSize: 200,
        productCategoryId: this.categoryData[index].id,
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState("category", ["categoryData"]),
    ...mapState("product", ["productData"]),
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