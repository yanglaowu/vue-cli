<template>
  <div class="home">
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button @click="handleChangeLocale" size="large" type="primary">
      {{ $t("message") }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleChangeLocale() {
      if (this.$i18n.locale === "zh_CN") {
        this.$i18n.locale = "en_US";
      } else {
        this.$i18n.locale = "zh_CN";
      }
    }
  }
};
</script>
