import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "lodash";

import infinityScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;

Vue.use(infinityScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
