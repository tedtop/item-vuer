<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <RenderList msg="🔍 🔭 Item Vuer 🔬 🔍" />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);

import RenderList from "./components/RenderList.vue";

export default {
  name: "App",
  components: {
    RenderList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
