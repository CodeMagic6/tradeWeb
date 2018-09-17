import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Products from '../pages/products/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})
