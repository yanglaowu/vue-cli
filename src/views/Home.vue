<template>
  <div class="home">
    <a-button @click="handleChangeLocale" size="large" type="primary">
      {{ $t("message") }}
    </a-button>
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
