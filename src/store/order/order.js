/*
 * @Author: LuZeng
 * @Date: 2022-08-22 22:52:05
 * @LastEditTime: 2022-08-23 00:29:30
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
    orderList: " ",
    // 未派送订单数据
    noDelivery: "",
  },
  mutations: {
    // 订单列表信息
    SET_OrderListData(state, orderList) {
      // state.orderList = orderList;
      state.orderList = orderList;
    },
    // 未派送订单数据
    SET_NoDeliveryData(state, noDelivery) {
      noDelivery = noDelivery.filter((item) => item.type == "待发货");
      state.noDelivery = noDelivery;
    },
  },
  actions: {
    // 获取订单列表信息
    async getOrderListData({ commit }, params) {
      let res = await get("/order/findAll", params);
      let { data } = res.data;
      // 处理原始数据
      data = JSON.parse(data);
      // 全部订单
      commit("SET_OrderListData", data);
      // 未派送订单
      commit("SET_NoDeliveryData", data);
    },
  },
};
