import Vue from "vue";
import Router from "vue-router";
import ScrollBox from "./views/ScrollBox";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "ScrollBox",
      component: ScrollBox
    }
  ]
});
