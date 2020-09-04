import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
// vuex 本地化存储方案
import createPersistedState from "vuex-persistedstate";
// 存储加密/解密
import { encrypt, decrypt } from "../utils/crypto";
// vuex 模块
import test from "./modules/test";
// vuex getters
import getters from "./getters";
// 本地存储配置
const persistedState = createPersistedState({
  key: process.env.VUE_APP_STORAGE_KEY, // storage 的 key,在.env内设置
  storage: {
    getItem: key => decrypt(sessionStorage.getItem(key)),
    setItem: (key, value) => sessionStorage.setItem(key, encrypt(value)),
    removeItem: key => sessionStorage.removeItem(key)
  }
});

Vue.use(Vuex);

const debug = process.env.NODE_ENV === "development";

export default new Vuex.Store({
  getters,
  modules: {
    test
  },
  plugins: debug ? [createLogger(), persistedState] : [persistedState]
});
