import Vue from 'vue';
import VueRouter from 'vue-router';
import CharacterSearch from '@/components/CharacterSearch';
import CharacterDetail from '@/components/CharacterDetail';
import Login from '@/components/Login';

Vue.use(VueRouter);

let store = null;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'characterSearch',
      component: CharacterSearch
    },
    {
      path: '/character/:characterName',
      name: 'characterDetail',
      component: CharacterDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    }
  ]
});

router.beforeEach((to, _, next) => {
  if (!to.meta.allowAnonymous) {
    if (store && store.state.admin.loggedIn) {
      next();
    } else {
      next({
        name: 'login'
      });
    }
  } else {
    next();
  }
})

export default router;

export function useStore(vStore) {
  store = vStore;
}