<template>
  <div class="home">
    <Button @click="handleChangeLocale" size="large" type="primary">
      {{ $t("message") }}
    </Button>
    <Input />
    <TimePicker></TimePicker>
  </div>
</template>

<script>
import { Button, Input, TimePicker } from "ant-design-vue";
export default {
  name: "Home",
  components: {
    Button,
    Input,
    TimePicker
  },
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
