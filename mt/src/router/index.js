import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/views/layout/default';
import blankPage from '@/views/layout/blank';
import Index from '@/views/page/index';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: "/index",
    children: [{
      path: "/index",
      name: "index",
      component: Index
    }]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage
  },

]

const router = new VueRouter({
  routes
})

export default router