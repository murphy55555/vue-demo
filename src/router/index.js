import Vue from 'vue'
import Router from 'vue-router'
import Slides from '@/components/slides'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slides',
      component: Slides
    }
  ]
})
