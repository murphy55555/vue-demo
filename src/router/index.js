import Vue from 'vue'
import Router from 'vue-router'
import CharacterSearch from '@/components/characterSearch'
import CharacterDetail from '@/components/characterDetail.vue'

Vue.use(Router)

export default new Router({
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
