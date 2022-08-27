<!--
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:19
 * @LastEditTime: 2022-08-26 18:48:05
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Mine\mine.vue
 * 别乱动！
-->
<template>
  <div class="mian">
    <!-- 设置客服模块 -->
    <div class="setting w">
      <span>客服</span>
      <span>设置</span>
    </div>

    <!-- 信息卡片 -->
    <div class="info w">
      <div class="info_top">
        <div class="head_img" @click="goPersonalData()">
          <img src="../../assets/katong.jpeg" alt="" srcset="" />
        </div>
        <div class="card" style="color: #727171">{{ username }}</div>
        <div class="growth">
          <h3 style="color: #727171">成长中心&nbsp;></h3>
        </div>
      </div>
      <div class="info_footer">
        <p>账户余额：</p>
        <span>5202￥</span>
        <button>充值</button>
      </div>
    </div>

    <!-- 我的功能模块 -->
    <div class="backstage w">
      <ul>
        <li><van-icon class="icon" name="like-o" />心仪收藏<span>></span></li>
        <li>
          <van-icon class="icon" name="after-sale" />红包卡卷<span>></span>
        </li>
        <li><van-icon class="icon" name="records" />我的账单<span>></span></li>
        <li @click="toAddress()">
          <van-icon class="icon" name="location-o" />常用地址<span>></span>
        </li>
        <li>
          <van-icon class="icon" name="cash-back-record" />退款/售后<span
            >></span
          >
        </li>
        <li><van-icon class="icon" name="phone-o" />联系我们<span>></span></li>
      </ul>
    </div>

    <!-- 退出登录模块 -->
    <button class="retreat" @click="$router.push('/login')">退出登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: " ",
    };
  },
  created() {
    this.getUserName();
  },
  methods: {
    // 获取当前登录用户名
    getUserName() {
      this.username = localStorage.getItem("userName");
    },
    // 调到个人信息组件
    goPersonalData() {
      this.$router.push({
        path: "/personalData",
      });
    },
    // 跳到常用地址组件
    toAddress() {
      this.$router.push({
        path: "/personalData",
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
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.w {
  width: 94%;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}
.mian {
  overflow: hidden;
  background-color: #f0f0f0;
  width: 100%;
  height: 100vh;
}
// 设置客服模块
.setting {
  // float: right;
  margin-top: 10px;
  span {
    float: right;
    margin-left: 10px;
  }
}

// 个人信息模块
.info {
  height: 140px;
  margin-top: 10px;
  box-shadow: 0 0 10px 0 #aaaaaa;
  background-image: linear-gradient(#ffd900, #fef263);
  .info_top {
    width: 100%;
    height: 65%;
    display: flex;
    .head_img {
      height: 84px;
      width: 84px;
      img {
        width: 70px;
        height: 70px;
        margin: 6px;
        border-radius: 38px;
        border: 2px solid #fff;
      }
    }
    .card {
      flex: 1;
      // height: 100%;
      line-height: 84px;
      font-size: 24px;
      margin-left: 10px;
      overflow: hidden;
    }
    .growth {
      width: 84px;
      height: 84px;
      h3 {
        line-height: 84px;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
  .info_footer {
    width: 100%;
    height: 35%;
    overflow: hidden;
    border-top: 1px solid #dcdddd;
    p {
      display: inline;
      color: #887f7a;
      font-size: 18px;
      line-height: 56px;
      margin-left: 15px;
    }
    span {
      display: inline-block;
      width: 80px;
      line-height: 56px;
      color: #ef9d00;
      font-size: 24px;
    }
    button {
      width: 50px;
      height: 30px;
      margin-left: 120px;
      border: 0;
      border-radius: 25px;
      color: #fff;
      background-color: #ef9d00;
    }
  }
}

// 我的功能模块
.backstage {
  background-color: aliceblue;
  margin-top: 30px;
  box-shadow: 0 0 10px 0 #aaaaaa;
  height: 220px;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
      height: 37px;
      // background-color: #ffe52d;
      background-color: #fef162;
      line-height: 37px;
      color: #727171;
      font-size: 20px;
      .icon {
        margin-right: 10px;
        color: #ef9d00;
        margin-left: 10px;
      }
      span {
        float: right;
        margin-right: 15px;
      }
    }
  }
}

// 退出登录模块
.retreat {
  display: block;
  margin: 30px auto;
  border: 0;
  background-color: #f6d200;
  color: #fff;
  width: 160px;
  height: 40px;
  box-shadow: 0 0 10px 0 #aaaaaa;
  border-radius: 30px;
  font-size: 22px;
}
</style>