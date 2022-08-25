/*
 * @Author: LuZeng
 * @Date: 2022-08-21 16:48:54
 * @LastEditTime: 2022-08-24 09:20:10
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\shopping\shoppping.js
 * 别乱动！
 */
import { post, get } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    massage: "购买成功",
    addCartMassage: "加入购物车成功",
  },
  mutations: {
    // 首页产品数据
    // SET_HomeProductData(state, homeProductData) {
    //   state.homeProductData = homeProductData;
    // },
    // 立即购买提示信息
    SET_Massage(state, massage) {
      state.massage = massage;
    },
    // 添加购物车提示信息
    SET_AddCartMassage(state, addCartMassage) {
      state.addCartMassage = addCartMassage;
    },
  },
  actions: {
    // 立即购买传递购买商品信息
    async updateProduct({ commit }, params) {
      let res = await get("/shopping/update", params);
      let { data } = res;
      commit("SET_Massage", data);
    },
    // 添加购物车返回信息
    async updateCart({ commit }, params) {
      let res = await get("/shopping/addCart", params);
      let { data } = res;
      commit("SET_AddCartMassage", data);
    },
  },
};
