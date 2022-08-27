/*
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:18
 * @LastEditTime: 2022-08-26 17:01:55
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\register\register.js
 * 别乱动！
 */
import { post, post_json } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    message: " ",
  },
  mutations: {
    SET_Message(state, message) {
      state.message = message;
    },
  },
  actions: {
    // 注册
    async toRegister(commit, params) {
      let res = await post("/user/register", params);
      // console.log(res);
      console.log(res.data.message);
      commit("SET_Message", res.data.message);
    },
  },
};
