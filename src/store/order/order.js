/*
 * @Author: LuZeng
 * @Date: 2022-08-22 22:52:05
 * @LastEditTime: 2022-08-25 19:30:00
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\order\order.js
 * 别乱动！
 */
import { post, get } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    // 订单列表
    orderList: [],
    // 当前登录用户名
    userName: " ",
    // 购物车信息
    cartList: [],
  },
  mutations: {
    // 当前登录用户名
    SET_UserName(state) {
      state.userName = localStorage.getItem("userName");
    },
    // 订单列表信息
    SET_OrderListData(state, orderList) {
      state.orderList = orderList;
    },
    // 购物车信息
    SET_CartListData(state, cartList) {
      state.cartList = cartList;
    },
  },
  actions: {
    // 获取待发货列表信息
    async getOrderListData({ commit }, params) {
      let res = await get("/order/findAll", params);
      let { data } = res.data;
      // 处理原始数据
      data = JSON.parse(data);
      // 待发货订单
      commit("SET_OrderListData", data);
    },

    // 获取购物车列表信息
    async getCartList({ commit }, params) {
      let res = await get("/order/findCart", params);
      let { data } = res.data;
      // 处理原始数据
      data = JSON.parse(data);
      commit("SET_CartListData", data);
    },
  },
};
