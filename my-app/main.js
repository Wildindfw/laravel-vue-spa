import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./plugins/vue-tailwind";
import "./assets/css/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Transitions from "vue2-transitions";
Vue.use(Transitions);

import MyOwnTheme from "./myOwnTheme.js";
import VueTailwind from "vue-tailwind";
Vue.use(VueTailwind, {
  theme: MyOwnTheme
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
