import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import demo1 from '@/components/demo1'
import demo2 from '@/components/demo2'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/aaa',
    component: demo1,
    children: [{
      path: 'bbb',
      component: demo2
    }]
  }]
})
