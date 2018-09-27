import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      stock: [],
      total: 0,
      totalPrice: 0
    },
    products: [
      {
        name: 'Bozlun W30',
        price: '3480',
        img: 'preview2.png',
        discount: '45',
        id: 0
      }
    ]
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getTotal: state => state.cart.total,
    getStock: state => state.cart.stock,
    getTotalPrice: (state) => {
        const savedCartItems = [...state.cart.stock]
        const arrTotal = savedCartItems.map(({ price, qty }) => {
          return Math.round(price * qty)
        })
        const result = arrTotal.join()
        return result
    }
  },
  mutations: {
    pushProductToCart: (state, { item }) => {
      state.cart.total++
      state.cart.stock.push({
        name: item.name,
        price: item.price,
        discount: item.discount,
        img: item.img,
        id: item.id,
        qty: 1
      })
    },
    incrementItemCart: (state, { id }) => {
      const cartItem = state.cart.stock.find(item => item.id === id)
      cartItem.qty++
      state.cart.total++
    },
    decrementItemCart: (state, { id }) => {
      const cartItem = state.cart.stock.find(item => item.id === id)
      cartItem.qty--
      state.cart.total--
    },
    clearCartAndCheckout: (state) => {
      state.cart.stock = []
      state.cart.total = 0
    }
  },
  actions: {
    addItemToCart: ({ commit, getters, state }, item) => {
      const cartItem = getters.getStock.find(cartItem => cartItem.id === item.id)
      if (cartItem) {
        commit('incrementItemCart', cartItem)
      } else {
        commit('pushProductToCart', { item })
      }
    },
    removeItem: ({ commit }, item) => {
      commit('decrementItemCart', { id: item.id })
    },
    addItem: ({ commit }, item) => {
      commit('incrementItemCart', { id: item.id })
    },
    clearCart: ({ commit }) => {
      commit('clearCartAndCheckout')
    }
  }
})
