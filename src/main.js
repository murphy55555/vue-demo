import Vue from 'vue';
import App from './App';
import router from './router';
import VeeValidate from 'vee-validate';
import store from './store';
import vuetify from './plugins/vuetify';

import './modules/admin';
import './modules/character';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  render: h => h(App)
});
