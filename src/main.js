import Vue from "vue";
// element-ui 为按需引入 需在 `./plugins/element-ui` 添加
import ElementUI from "./plugins/element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
