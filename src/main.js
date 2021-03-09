import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

// 事件总线  创建vue实例
Vue.prototype.$bus = new Vue();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

