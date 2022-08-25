<!--
 * @Author: LuZeng
 * @Date: 2022-08-23 20:18:35
 * @LastEditTime: 2022-08-25 14:17:06
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\views\Mine\personalData.vue
 * 别乱动！
-->
<template>
  <div class="main">
    <!-- 顶部nav导航栏 -->
    <van-sticky>
      <van-nav-bar
        style="background-color: transparent"
        :border="border"
        title="个人明片"
        left-text="返回"
        right-text="修改"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="container">
        <div class="card">
          <ol>
            <li>
              <span style="color: #e2041b; font-size: 22px"
                ><van-icon name="like"
              /></span>
              <h3>Business card of {{ username }}</h3>
            </li>
            <li>
              <h4>姓名</h4>
              <p>{{ userInfo.fullname }}</p>
            </li>
            <li>
              <h4>爱好</h4>
              <p>{{ userInfo.hobby }}</p>
            </li>
            <li>
              <h4>出生日期</h4>
              <p>{{ userInfo.brith }}</p>
            </li>
            <li>
              <h4>邮箱</h4>
              <p>{{ userInfo.email }}</p>
            </li>
            <li>
              <h4>个性签名</h4>
              <p>{{ userInfo.autograph }}</p>
            </li>
            <li>
              <h4>专业</h4>
              <p>{{ userInfo.industry }}</p>
            </li>
          </ol>
        </div>
      </div>
    </van-sticky>
  </div>
</template>

<script>
import { get } from "@/http/axios";
export default {
  data() {
    return {
      border: false,
      username: "",
      userInfo: {},
    };
  },
  created() {
    this.getUserName();
    this.getUserInfo();
  },
  methods: {
    // 获取用户名
    getUserName() {
      this.username = localStorage.getItem("userName");
    },
    // 发送请求拿数据
    async getUserInfo() {
      let params = {
        username: this.username,
      };
      let res = await get("/mine/findOwn", params);
      let { data } = res.data;
      console.log(data);
      this.userInfo = data;
    },
    // 点击返回上一层
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
ul,
ol {
  list-style: none;
}
.main {
  position: relative;
  .container {
    width: 100%;
    height: 848px;
    position: absolute;
    top: 0;
    background: url("../../images/ten_serve.png") no-repeat;
    background-size: 100% auto;
    .card {
      width: 95%;
      height: 60%;
      margin: 73% auto;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 5px 0 rgba(234, 218, 255, 1);
      overflow: hidden;
      ol {
        width: 80%;
        margin: auto;
        li {
          height: 50px;
          line-height: 50px;
          margin-top: 20px;

          h4 {
            display: inline-block;
            width: 25%;
          }
          p {
            display: inline-block;
            width: 70%;
            color: #727171;
          }
        }
        li:not(:nth-child(1)) {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e5e4e6;
        }
        li:nth-child(7) {
          border-bottom: 0;
        }
        li:nth-child(2) {
          margin-top: 35px;
        }
        li:nth-child(1) {
          margin-top: 10px;
          h3 {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>