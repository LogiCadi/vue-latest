import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Pinia.vue"),
    },
    {
      path: "/base",
      component: () => import("../views/Base.vue"),
    },
  ],
});

export default router;
