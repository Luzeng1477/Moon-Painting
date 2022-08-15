/*
 * @Author: [kangjie]
 * @Date: 2022-04-23 21:44:50
 * @LastEditors: LuZeng
 * @LastEditTime: 2022-08-12 14:40:39
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";
// 引入注册模块
import register from "./register/register";
// 引入用户模块
import user from "./user/user";
// 引入主页模块
import home from "./home/home";
// 引入主页商品模块
import product from "./product/product";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // token存储
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  },
  mutations: {
    //存储token
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token.token);
    },
    //删除token
    delToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {
    // 注册模块
    register,
    // 用户模块
    user,
    // 主页模块
    home,
    // 主页商品模块
    product,
  },
});
