/*
 * @Author: yangjie
 * @Date: 2020-09-04 14:52:35
 * @Last Modified by: yangjie
 * @Last Modified time: 2020-09-04 14:52:55
 * 国际化设置
 */
import Vue from "vue";
import VueI18n from "vue-i18n";

import en_US from "./locale/en_US";
import zh_CN from "./locale/zh_CN";

Vue.use(VueI18n);

const messages = {
  en_US: { ...en_US },
  zh_CN: { ...zh_CN }
};

export default new VueI18n({
  locale: "zh_CN", // set locale
  messages // set locale messages
});
