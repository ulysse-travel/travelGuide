import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Page-Home.vue";
//import Single from "@/views/Page-Single.vue";
//import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Page-Home",
    component: Home,
    meta: {
      title: 'Les guides Ulysse',
      content:''
    }  
  },
  {
    path: "/:pageId/:pageName",
    name: "Page-guide",
    props: true,
    component: () => import('../views/Page-Guide.vue'),
    meta: {
      title: ":pageName - Les guides Ulysse",
      content:''
    }      
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({behavior:'smooth'});
  }  
});

export default router;