import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import store from './store'
import VueToastify from "vue-toastify"
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.use(VueToastify)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
