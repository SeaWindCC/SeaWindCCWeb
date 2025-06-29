import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path:"/",   
    name:"home",
    component: () => import("../views/home.vue")
  },
/*
  {
    path:"/rules",
    name:"rules",
    component: () => import("")
  },
  {
    path:"/act",
    name:"act",
    component: () => import("")
  },
  {
    path:"/privacy",
    name:"privacy",
    component: () => import("")
  },
  {
    path:"/officialTeam",
    name:"officialTeam",
    component: () => import("")
  },

*/

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router