import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartStatus: null,
    cart: [],
    products: [
      {
        name: 'Bozlun Smart Watches',
        price: '4480р.',
        img: 'preview2.png',
        discount: '35%',
        id: 0
      }
    ]
  },
  getters: {
    getProducts: state => state.products,
    getProductsLength: state => state.cart.length
  },
  mutations: {
    addItem: (state, { id }) => {
      state.cart.push({
        id,
        qty: 1
      })
    },
    incrementItemQty: (state, { id }) => {
      const cartItem = state.cart.find(item => item.id === id)
      cartItem.qty++
    },
    decrementItemQty: (state, { id }) => {
      const cartItem = state.cart.find(item => item.id === id)
      cartItem.qty--
    },
    setCheckoutStatus: (state, status) => {
      state.cartStatus = status
    }
  },
  actions: {
    addToCart: ({ commit }, item) => {
      // const savedCartItems = [...state.cart]
      commit('addItem', { id: item.id })
    }
  }
})
