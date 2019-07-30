import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import store from './store'

Vue.use(VeeValidate); 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})
