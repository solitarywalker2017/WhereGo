// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import fastClick from "fastclick";
import "./assets/styles/border.css";
import "./assets/styles/reset.css";
import "./assets/styles/iconfont.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
Vue.use(VueRouter);
