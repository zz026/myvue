// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import moment from 'moment'
//import VueAxios from 'vue-axios'
Vue.prototype.$http = axios

import 'mint-ui/lib/style.css';
import '../static/mui/css/mui.css'
import '../static/css/site.css'

Vue.config.productionTip = false

Vue.use(MintUI)
//Vue.use(VueAxios, axios)

// 时间过滤器
Vue.filter('datefilter', (input, dateFmtString) => {
  return moment(input).format(dateFmtString || 'YYYY-MM-DD HH:mm:ss');
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
