/*
 * @Author: LuZeng
 * @Date: 2022-08-10 19:33:20
 * @LastEditTime: 2022-08-16 16:44:28
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \ThreeNoded:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\store\home\home.js
 * 别乱动！
 */
import { get } from "@/http/axios";
export default {
  namespaced: true,
  state: {
    // 轮播图数据
    swiperData: [],
  },
  // 修饰器
  // getters: {
  //   getMessage(state) {
  //     // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
  //     return `hello${state.swiperData}`;
  //   },
  // },

  // 修改值
  mutations: {
    // 将获取的轮播图信息给初始的容器
    SET_swiperData(state, swiperData) {
      state.swiperData = swiperData;
    },
  },

  // 异步操作
  actions: {
    // 请求后台将获取到的数据信息交给mutation进行下一步赋值操作
    async getSwiperData({ commit }) {
      let res = await get("/products/findAll");
      commit("SET_swiperData", res.data.data);
    },
  },
};
