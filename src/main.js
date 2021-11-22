import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Favourites from './views/Favourites'
import List from './views/List'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
