import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$bus = new Vue()
const app = new Vue({
    ...App
})
app.$mount()
