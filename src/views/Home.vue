<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary">主要按钮</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      input: ""
    };
  },
  components: {
    // async components
    HelloWorld: () => import("@/components/HelloWorld.vue")
  }
};
</script>
