/*
 * @Author: LuZeng
 * @Date: 2022-08-21 16:48:54
 * @LastEditTime: 2022-08-22 20:49:14
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
  },
  mutations: {
    // 首页产品数据
    // SET_HomeProductData(state, homeProductData) {
    //   state.homeProductData = homeProductData;
    // },
    // 添加购物车提示信息
    SET_Massage(state, massage) {
      state.massage = massage;
    },
  },
  actions: {
    // 获取首页产品信息
    async getHomeProductData({ commit }) {
      let res = await get("/products/findAll");
      let { data } = res.data;
      commit("SET_HomeProductData", data);
      // console.log(res.data.data.list);
    },
    // 根据产品name获取产品数据
    async getProductDataByProductCategoryId({ commit }, params) {
      let res = await get("/products/findName", params);
      let { data } = res.data;
      commit("SET_Massage", data);
      // console.log(res.data.data.list);
    },
    // 立即购买传递购买商品信息
    async updateProduct({ commit }, params) {
      let res = await get("/shopping/update", params);
      let { data } = res;
      commit("SET_Massage", data);
    },
  },
};
