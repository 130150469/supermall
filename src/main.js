import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'

Vue.config.productionTip = false

// 事件总线  创建vue实例
Vue.prototype.$bus = new Vue();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

