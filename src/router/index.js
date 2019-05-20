import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminHome from '@/components/admin/home/home'
import Home  from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',   //
      component: Home   //页面名字
    },
    {
      path: '/adminHome',
      name: 'adminHome',   //
      component: AdminHome   //页面名字
    }
  ]
})
