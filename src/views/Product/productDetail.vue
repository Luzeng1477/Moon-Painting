<!--
 * @Author: LuZeng
 * @Date: 2022-08-17 19:04:51
 * @LastEditTime: 2022-08-26 15:38:03
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Product\productDetail.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="更多"
      left-arrow
      fixed
      @click-left="onClickLeft"
      bind:click-right="onClickRight"
    />
    <img :src="productDetailData.photo" alt="" srcset="" />
    <div class="introduce">
      <span class="discount">领劵&nbsp;&gt;</span>
      <div class="product_name w">
        <h2>{{ productDetailData.name }}</h2>
        <span class="month">月销&nbsp;{{ productDetailData.pay_people }}</span>
      </div>
      <div class="propaganda w">
        {{ productDetailData.inrtoduce }}
      </div>
    </div>
    <div class="address_guarantee">
      <div class="address w">
        <span class="tittle">服务地址</span>
        <span class="life">{{ productDetailData.address }}</span>
      </div>
      <div class="guarantee w">
        <span class="tittle">保障</span>
        <span class="toDoor">上门服务·先享受后付款</span>
      </div>
    </div>
    <!-- 公司简介评分 -->
    <div class="company">
      <div class="company-top">
        <div class="company-name">{{ productDetailData.company }}</div>
        <div class="company-fraction">
          <p>服务描述&nbsp;4.5</p>
          <p>服务体验&nbsp;4.5</p>
        </div>
      </div>
      <div class="company-buttom">
        <button class="into">进店逛逛</button>
        <button class="stroll">全部商品</button>
      </div>
    </div>
    <!-- 加入购物车模块 -->
    <footer>
      <div class="inquiry">
        <van-icon style="margin-top: 5px" name="service" size="30px" />
        <p style="color: #9fa0a0">客服</p>
      </div>
      <div class="collection">
        <van-icon style="margin-top: 5px" name="star" size="30px" />
        <p style="color: #9fa0a0">收藏</p>
      </div>
      <div class="shopping_cart">
        <div class="box">
          <div
            class="cart"
            style="background-color: #f39800"
            @click="addCart()"
          >
            加入购物车
          </div>
          <div
            class="shopping"
            style="background-color: #d3381c"
            @click="toBuy()"
          >
            领券购买
          </div>
        </div>
      </div>
    </footer>

    <div class="occupy"></div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { get } from "@/http/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      id: " ",
      title: "服务详情",
      productDetailData: {},
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.SET_UserName();
    this.getProductId();
  },
  computed: {
    // ...mapState("product", ["productDetailData"]),
    ...mapState("user", ["userName"]),
    ...mapState("shopping", ["massage"]),
    ...mapState("shopping", ["addCartMassage"]),
    ...mapState("order", ["userName"]),
  },
  methods: {
    // 调用仓库根据id查询商品信息方法getProductDetailById
    // 获取username
    ...mapMutations("order", ["SET_UserName"]),
    // 通过id查询商品信息
    ...mapActions("product", ["getProductDetailById"]),
    ...mapActions("shopping", ["updateProduct"]),
    ...mapActions("shopping", ["updateCart"]),
    // 传递id参数
    async getProductId() {
      let params = {
        id: this.id,
      };
      // this.getProductDetailById(params);
      let res = await get("/products/findId", params);
      let { data } = res.data;
      this.productDetailData = data;
    },
    // 点击购买事件
    toBuy() {
      let params = {
        userName: this.userName,
        productInfo: {
          id: this.productDetailData.id,
          name: this.productDetailData.name,
          price: this.productDetailData.price,
          introduce: this.productDetailData.inrtoduce,
          photo: this.productDetailData.photo,
          type: "待发货",
          num: 1,
        },
      };
      this.updateProduct(params);
      Toast.success(this.massage);
    },
    // 点击添加购物车事件
    addCart() {
      let params = {
        userName: this.userName,
        productInfo: {
          id: this.productDetailData.id,
          name: this.productDetailData.name,
          price: this.productDetailData.price,
          introduce: this.productDetailData.inrtoduce,
          photo: this.productDetailData.photo,
          type: "购物车",
          num: 1,
        },
      };
      this.updateCart(params);
      Toast.success(this.addCartMassage);
    },
    // 返回点击事件
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
.main {
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  .introduce {
    width: 96%;
    height: 160px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    background-color: #fff;
    .discount {
      background-color: #e83929;
      color: white;
      display: inline-block;
      width: 62px;
      height: 21px;
      position: absolute;
      top: 15px;
      left: 335px;
      text-align: center;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .product_name {
      height: 50px;
      margin-top: 30px;
      h2 {
        display: inline-block;
        line-height: 50px;
        font-weight: normal;
      }
      .month {
        float: right;
        margin-top: 20px;
        color: #c4c2c6;
      }
    }
    .propaganda {
      height: 65px;
      font-size: 22px;
    }
  }
  .address_guarantee {
    width: 96%;
    margin: auto;
    margin-top: 10px;
    height: 105px;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    border-radius: 10px;
    overflow: hidden;
    .address {
      height: 25px;
      margin-top: 20px;
    }
    .guarantee {
      height: 25px;
      margin-top: 20px;
    }
    .tittle {
      display: inline-block;
      height: 100%;
      width: 75px;
      text-align: center;
      color: #adadad;
    }
    .life,
    .toDoor {
      display: inline-block;
      height: 100%;
      margin-left: 20px;
    }
  }
  .company {
    height: 160px;
    width: 96%;
    margin: auto;
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
    border-radius: 10px;
    overflow: hidden;
    .company-top {
      width: 80%;
      height: 50px;
      margin: auto;
      margin-top: 20px;
      display: flex;
      .company-name {
        width: 60%;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .company-fraction {
        flex: 1;
        text-align: center;
        margin-top: 3px;
      }
    }
    .company-buttom {
      width: 80%;
      height: 50px;
      margin: auto;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      button {
        outline: none;
        background-color: #fff;
        height: 80%;
        width: 30%;
        border-radius: 40px;
        border: 2px solid #ee7800;
        color: #ee7800;
      }
    }
  }
  // 加入购物车模块
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    .inquiry {
      width: 17%;
      text-align: center;
      line-height: 19px;
      color: #ee7800;
    }
    .collection {
      width: 17%;
      text-align: center;
      line-height: 19px;
      color: #ee7800;
    }
    .shopping_cart {
      width: 66%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .box {
        width: 90%;
        height: 80%;
        background-color: pink;
        overflow: hidden;
        border-radius: 40px;
        display: flex;
        div {
          width: 50%;
          color: #fff;
          font-size: 22px;
          text-align: center;
          line-height: 45px;
        }
      }
    }
  }
}
.main img {
  width: 100%;
  height: 60vh;
}
.w {
  width: 94%;
  margin: auto;
}
.occupy {
  height: 70px;
}
</style>