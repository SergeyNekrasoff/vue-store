import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      stock: [],
      total: 0
    },
    products: [
      {
        name: 'Bozlun Smart Watches',
        price: '4480',
        img: 'preview2.png',
        discount: '35',
        id: 0
      }
    ]
  },
  getters: {
    getProducts: state => state.products,
    getTotal: state => state.cart.total,
    getStock: state => state.cart.stock
  },
  mutations: {
    addItem: (state, { item }) => {
      state.cart.total++
      state.cart.stock.push(item)
      // for (let i = 0, cartStock = state.cart.stock; i < cartStock.length; i++) {
      //   const cartItem = cartStock[i]
      //   if (cartItem.id === item.id) {
      //     // console.log(`true`)
      //       state.cart.stock[cartItem].qty++
      //   } else if () {
      //     console.log(`true`)
      //       state.cart.stock[item].qty = 1
      //       state.cart.stock.push(item)
      //   } else {
      //       state.cart.stock.push(item)
      //   }
      // }
    },
    incrementItemQty: (state, { id }) => {
      const cartItem = state.cart.find(item => item.id === id)
      cartItem.qty++
    },
    decrementItemQty: (state, { id }) => {
      const cartItem = state.cart.find(item => item.id === id)
      cartItem.qty--
    }
  },
  actions: {
    addToCart: ({ commit, getters }, item) => {
      commit('addItem', { item })
    }
  }
})
