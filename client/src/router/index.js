import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFoundView from '@/components/404'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      // not found handler
      path: '*',
      name: '404',
      component: NotFoundView
    }
  ]
})
