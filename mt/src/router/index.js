import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '_v/layout/default';
import blankPage from '_v/layout/blank';
import Index from '_v/page/index';


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