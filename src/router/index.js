import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

function cekToken(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/Products.vue'),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/products",
      name: "products",
      beforeEnter : cekToken,
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/singleproduct/:id_produk",
      name: "singleproducts",
      component: () => import("../views/SingleProducts.vue"),
      props: true,
      beforeEnter : cekToken,
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/Category.vue"),
    },
    {
      path: "/brand",
      name: "brand",
      component: () => import("../views/Brands.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/user",
      name: "user",
      beforeEnter : cekToken,
      component: () => import("../views/User.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/Checkout.vue"),
      meta: { requiresLogin: true },
    },
    {
      path: "/order/:orderCode",
      name: "Order",
      component: () => import("../views/TrackingOrder.vue"),
      props: true,
    },
  ],
});

export default router;
