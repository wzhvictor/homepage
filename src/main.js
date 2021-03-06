import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'
import DataJson from '@/assets/data'
import moment from 'moment'
import Http, { apiList } from '@/api'
import './setup.js'

Vue.config.productionTip = false

Vue.prototype.$dataJson = DataJson
Vue.prototype.$moment = moment
Vue.prototype.$bus = new Vue()
Vue.prototype.$http = Http
Vue.prototype.$apiList = apiList

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
