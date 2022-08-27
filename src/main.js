/*
 * @Author: LuZeng
 * @Date: 2022-08-08 19:11:18
 * @LastEditTime: 2022-08-26 20:14:29
 * @LastEditors: LuZeng
 * @Description: 小白本白，写的不好多多包涵！！！
 * @FilePath: \jsd:\rjiananzhuang\WEB\WEB workspace\实训三\练习\briup-wisdom-order\src\main.js
 * 别乱动！
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vant.js";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
// 时间戳过滤器
Vue.filter("dateFormat", (dataStr) => {
  var time = new Date(dataStr);

  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    timeAdd0(m) +
    "-" +
    timeAdd0(d) +
    " " +
    timeAdd0(h) +
    ":" +
    timeAdd0(mm) +
    ":" +
    timeAdd0(s)
  );
});

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: "./static/error.png",
  loading: "./static/loading.gif",
  attempt: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
