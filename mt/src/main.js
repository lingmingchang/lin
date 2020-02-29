import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css'

Vue.config.productionTip = false

// 注册一个全局自定义指令 `document-click`
Vue.directive('document-click', {

  bind(el, binding, vnode){
    document.addEventListener("click", binding.value, false);
  }

})

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')