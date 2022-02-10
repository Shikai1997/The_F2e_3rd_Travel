import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "spot" },
  },
  {
    path: "/spot",
    name: "spot",
    component: () => import("../App.vue"),
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: () => import("../App.vue"),
  },
  {
    path: "/hotel",
    name: "hotel",
    component: () => import("../App.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../App.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
