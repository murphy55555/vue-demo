import Vue from 'vue';
import VueRouter from 'vue-router';
import CharacterSearch from '@/components/CharacterSearch';
import CharacterDetail from '@/components/CharacterDetail';

Vue.use(VueRouter);

export default new VueRouter({
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
    }
  ]
})