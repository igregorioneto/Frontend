import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TodoListPage.vue') },
      { path: 'multistep', component: () => import('pages/MultiStepPage.vue') },
    ],
  },
];

export default routes;
