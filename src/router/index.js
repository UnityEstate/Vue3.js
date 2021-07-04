import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../layouts/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    children: [
      {
        path: "",
        name: "Home", //ชื่อของ Route
        component: Home
        // component: () =>  //lazy load
        //   import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
