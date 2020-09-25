import Vue from "vue";
// 组件
import Components from "./components";
// 根组件
import App from "./App.vue";
// 路由
import router from "./router";
// vuex
import store from "./store";
// 国际化
import i18n from "./i18n";

Vue.use(Components);

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
