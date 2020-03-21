import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import  'element-ui/lib/theme-chalk/index.css'

// 按需引入element-ui
// import elemt from './plugins/element'
// Vue.use(elemt);
// 全部引入element-ui
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

// 导入全局样式表
import './assets/css/global.css'

// 挂载axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
