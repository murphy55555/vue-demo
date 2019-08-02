import Vue from 'vue';
import App from './App';
import router, { useStore } from './router';
import VeeValidate from 'vee-validate';
import store, { useRouter } from './store';
import vuetify from './plugins/vuetify';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

useRouter(router);
useStore(store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  render: h => h(App)
});
