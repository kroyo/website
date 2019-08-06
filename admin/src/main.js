import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import ElementUI from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss'

Vue.use(ElementUI, { size: 'medium' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
