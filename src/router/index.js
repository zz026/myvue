import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import newslist from '@/components/news/newslist'
import newsinfo from '@/components/news/newsinfo'
import photolist from '@/components/photo/photolist'
import photoinfo from '@/components/photo/photoinfo'

//import VueResource from 'vue-resource'

Vue.use(Router)
//Vue.use(VueResource)


export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/news/newslist',
      component: newslist
    }, {
      path: '/news/newsinfo:newsId',
      component: newsinfo
    }, {
      path: '/photo/photolist',
      component: photolist
    },
     {
      path: '/photo/photoinfo:photoId',
      component: photoinfo
    }
    /*, {
      path: '/aaa',
      component: demo1,
      children: [{
        path: 'bbb',
        component: demo2
      }]
  }*/
  ]
})
