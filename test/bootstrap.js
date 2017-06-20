import Vue from 'vue'
import VueRouter from 'vue-router'
import dmui from '../src/index.js'
import routes from './packages/routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(dmui)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

export default new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
