import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Cart from '@/views/Cart'
import Checkout from '@/views/Checkout'
import Contacts from '@/views/Contacts'
import Shipping from '@/views/Shipping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: Shipping
    }
  ]
})
