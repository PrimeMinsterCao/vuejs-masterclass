import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/projects",
      name: "projects",
      //lazy loading
      component: () => import("@/views/ProjectsView.vue")
    },
    {
      path: "/projects/:id",
      name: "single-project",
      component: () => import("@/views/SingleProjectView.vue")
    },
    {
      //.匹配除换行符之外的任意字符，(.*)表示匹配任意长度除换行符之外的字符，
      //最后的*表示前面的 /:catchAll(.*) 重复任意次
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: h("p", { style: "color:red" }, "404 Not Found")
    }
  ],
})

export default router
