import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Card from '@/views/Card'
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
      path: '/',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/',
      name: 'Card',
      component: Card
    },
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/',
      name: 'Shipping',
      component: Shipping
    }
  ]
})
