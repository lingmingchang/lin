import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '_v/layout/default';
import blankPage from '_v/layout/blank';
import index from '_v/page/index';
import goodsList from '_v/page/goodsList.vue';
import changeCity from '_v/page/changeCity.vue';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default',
    component: defaultPage,
    redirect: "/index",
    children: [{
      path: "s/:name",
      name: "goods",
      component: goodsList
    }, {
      path: "/index",
      name: "index",
      component: index
    }, {
      path: "/changeCity",
      name: "changeCity",
      component: changeCity
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