<template>
  <a-config-provider :locale="locale">
    <div id="root">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
// ui组件内建语言包
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";
export default {
  computed: {
    locale() {
      return this.$i18n.locale === "zh_CN" ? zh_CN : en_US;
    }
  }
};
</script>
<style lang="css">
@import "~normalize.css";
</style>
