import Vue from "vue";
// ant-design 组件库
import Antd from "ant-design-vue";
// 根组件
import App from "./App.vue";
// 路由
import router from "./router";
// vuex
import store from "./store";
// 国际化
import i18n from "./i18n";

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
