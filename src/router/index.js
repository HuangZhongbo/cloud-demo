import Vue from 'vue'
import Router from 'vue-router'
import Cloud from '@/components/cloud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Cloud
    }
  ]
})
