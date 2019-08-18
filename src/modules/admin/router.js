import router from '@/router';
import store from '@/store';
import Login from './pages/Login';

router.addRoutes([{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    allowAnonymous: true
  }
}])

router.beforeEach((to, _, next) => {
  if (!to.meta.allowAnonymous) {
    next();
  } else {
    if (store && store.state.admin.loggedIn) {
      next();
    } else {
      next({
        name: 'login'
      });
    }
  }
})