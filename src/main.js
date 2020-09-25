import 'normalize.css'

import Vue from "vue";
// 根组件
import App from "./App.vue";
// 路由
import router from "./router";
// vuex
import store from "./store";
// 国际化
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
