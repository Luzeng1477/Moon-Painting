/*
 * @Author: LuZeng
 * @Date: 2022-08-12 11:18:58
 * @LastEditTime: 2022-08-22 20:45:43
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\product\product.js
 * 别乱动！
 */
import { post, get } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    // 首页产品数据
    homeProductData: [],
    // 根据栏目name获取产品数据
    productData: [],
    // 根据产品id获取产品详情数据
    productDetailData: {},
  },
  mutations: {
    // 首页产品数据
    SET_HomeProductData(state, homeProductData) {
      state.homeProductData = homeProductData;
    },
    // 根据栏目name获取产品数据
    SET_ProductData(state, productData) {
      state.productData = productData;
    },
    // 根据产品id获取产品详情数据
    SET_ProductDetailData(state, productDetailData) {
      state.productDetailData = productDetailData;
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
      commit("SET_ProductData", data);
      // console.log(res.data.data.list);
    },
    // 根据产品id获取产品详情数据
    async getProductDetailById({ commit }, params) {
      let res = await get("/products/findId", params);
      let { data } = res.data;
      commit("SET_ProductDetailData", data);
    },
  },
};
