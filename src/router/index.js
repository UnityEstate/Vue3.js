import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import DashBoard from "../layouts/DashBoard.vue";
import Product from "../views/Product.vue";

import categoryRoute from "../views/category/category-route";
import { from } from "core-js/core/array";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    meta: { requireAuth: true },  //จะต้องมีการ login ถึงจะใช้งานฟังห์ชั้นนี้ได้
    children: [
      {
        path: "",
        name: "Home", //ชื่อของ Route
        component: Home,
        // component: () =>  //lazy load
        //   import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "product",
        name: "Product",
        component: Product,
      },
      ...categoryRoute,
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
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) { //ตรวจสอบว่ามี requireAuth = true
    //ตรวจสอบ token ว่ามีหรือไม่
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }       
  } else {
    next();    
  }
});

export default router;
