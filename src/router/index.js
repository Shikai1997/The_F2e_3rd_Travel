import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // path: '/',
    // name: 'Home',
    // component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
