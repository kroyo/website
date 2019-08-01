import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'
import mavonEditor from 'mavon-editor'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './utils/format'    // Date.Format 方法

Vue.use(VueLazyLoad)
Vue.use(elementUI)
Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
