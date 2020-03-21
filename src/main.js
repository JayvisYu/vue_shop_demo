import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入element-ui
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// import elemt from './plugins/element'
// Vue.use(elemt);
// 全部引入element-ui
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

// 挂载axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 设置拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  // 最后必须return config
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
