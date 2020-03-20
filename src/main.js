import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elemt from './plugins/element'
// import ElementUI from 'element-ui';
// 导入全局样式表
import './assets/css/global.css'

// Vue.use(ElementUI);
Vue.use(elemt);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
