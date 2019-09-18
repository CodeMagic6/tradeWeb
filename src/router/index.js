import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Products from '../pages/productDetails/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: Products
    }
  ]
})
