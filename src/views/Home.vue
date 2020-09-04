<template>
  <div class="home">
    <a-button @click="handleChangeLocale" size="large" type="primary"> {{ $t("message") }} {{ count }} </a-button>
    <a-date-picker />
    <a-time-picker />
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    count() {
      return this.$store.state.test.count;
    }
  },
  methods: {
    handleChangeLocale() {
      const num = parseInt(Math.random() * 10);
      this.$store.dispatch("setCount", num);
      // if (this.$i18n.locale === "zh_CN") {
      //   this.$i18n.locale = "en_US";
      // } else {
      //   this.$i18n.locale = "zh_CN";
      // }
    }
  }
};
</script>
