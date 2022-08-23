/*
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:18
 * @LastEditTime: 2022-08-23 10:12:33
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\user\user.js
 * 别乱动！
 */
import { get, post, post_json } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    userName: " ",
  },
  mutations: {
    SET_UserInfo(state, userName) {
      state.userName = userName;
      localStorage.setItem("userName", userName);
    },
  },
};
