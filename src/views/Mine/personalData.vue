<!--
 * @Author: LuZeng
 * @Date: 2022-08-23 20:18:35
 * @LastEditTime: 2022-08-26 16:51:32
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
        :right-text="rightText"
        left-arrow
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight"
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
              <input
                type="text"
                v-model="userInfo.fullname"
                :disabled="disabled"
              />
            </li>
            <li>
              <h4>爱好</h4>
              <input
                type="text"
                v-model="userInfo.hobby"
                :disabled="disabled"
              />
            </li>
            <li>
              <h4>出生日期</h4>
              <input
                type="text"
                v-model="userInfo.brith"
                :disabled="disabled"
              />
            </li>
            <li>
              <h4>邮箱</h4>
              <input
                type="text"
                v-model="userInfo.email"
                :disabled="disabled"
              />
            </li>
            <li>
              <h4>个性签名</h4>
              <input
                type="text"
                v-model="userInfo.autograph"
                :disabled="disabled"
              />
            </li>
            <li>
              <h4>专业</h4>
              <input
                type="text"
                v-model="userInfo.industry"
                :disabled="disabled"
              />
            </li>
          </ol>
        </div>
      </div>
    </van-sticky>
  </div>
</template>

<script>
import { get } from "@/http/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      border: false,
      username: "",
      userInfo: {},
      rightText: "修改",
      disabled: true,
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
      this.userInfo = data;
    },
    // 点击返回上一层
    onClickLeft() {
      this.$router.go(-1);
    },
    // 修改个人信息按钮
    // 思路：该点击事件是实现修改与保存之间的来回切换，
    // 修改期间input不可以操作，保存期间input可以操作，
    async onClickRight() {
      if (this.rightText == "修改") {
        this.disabled = false;
        this.rightText = "保存";
        Toast("请进行修改");
      } else {
        this.disabled = true;
        this.rightText = "修改";
        // 发送请求，保存修改后的数据
        // 定义发送对象(取出多余数据，如购物车一系列)
        let obj = {
          name: this.username,
          fullname: this.userInfo.fullname,
          hobby: this.userInfo.hobby,
          brith: this.userInfo.brith,
          email: this.userInfo.email,
          autograph: this.userInfo.autograph,
          industry: this.userInfo.industry,
        };
        obj = JSON.stringify(obj);
        let params = {
          obj,
        };
        let res = await get("/mine/updateOwnData", params);
        if (res.data.message == "更新成功") {
          Toast.success("保存成功");
        } else {
          Toast.fail("保存失败");
        }
      }
    },
  },
};
</script>

<style  lang="less">
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
  height: calc(~"100vh" - 30px);
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
      margin: 85% auto;
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
          input {
            background-color: #fff;
            border: 0;
            color: #7d7d7d;
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