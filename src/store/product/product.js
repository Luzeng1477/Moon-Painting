/*
 * @Author: LuZeng
 * @Date: 2022-08-12 11:18:58
 * @LastEditTime: 2022-08-12 15:00:40
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \ThreeNoded:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\product\product.js
 * 别乱动！
 */
import { post, get } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    // 首页产品数据
    homeProductData: [],
    // 根据栏目id获取产品数据
    productData: [],
    // 根据产品id获取产品详情数据
    productDetailData: {},
  },
  mutations: {
    // 首页产品数据
    SET_HomeProductData(state, homeProductData) {
      state.homeProductData = homeProductData;
    },
    // 根据栏目id获取产品数据
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
      let res = await get("/product/pageQuery?page=1&pageSize=8");
      console.log(res);
      commit("SET_HomeProductData", res.data.data.list);
      // console.log(res.data.data.list);
    },
    // 根据产品id获取产品数据
    async getProductDataByProductCategoryId({ commit }, params) {
      let res = await get("/product/pageQuery", params);
      commit("SET_ProductData", res.data.data);
      // console.log(res.data.data.list);
    },
    // 根据产品id获取产品详情数据
    async getProductDetailById({ commit }, params) {
      let res = await get("/app/product/queryProductDetails", params);
      commit("SET_ProductDetailData", res.data.data);
      // console.log(res.data.data);
    },
  },
};
