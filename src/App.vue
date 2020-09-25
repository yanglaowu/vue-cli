<template>
  <ConfigProvider :locale="locale">
    <div id="root">
      <router-view />
    </div>
  </ConfigProvider>
</template>

<script>
// ui组件内建语言包
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";
import { ConfigProvider } from "ant-design-vue";
export default {
  components: {
    ConfigProvider
  },
  computed: {
    locale() {
      return this.$i18n.locale === "zh_CN" ? zh_CN : en_US;
    }
  }
};
</script>
