import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import movie from "../views/movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: movie,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
