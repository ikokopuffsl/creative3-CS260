import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const cookies = ["hellow", "world"];
let data = {
  products: cookies,
  cart: []
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
