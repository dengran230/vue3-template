import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'demo',
      component: () => import('../views/demo/index.vue'),
    },
];

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory()
  routes,
});
// 路由首位
router.beforeEach((to, from, next) => {
  //   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  //   else next();
  next();
});

export default router;
