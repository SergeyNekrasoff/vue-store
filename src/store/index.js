import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartTotal: 0,
        cart: {},
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
        getProducts: state => state.products
    },
    mutations: {
      addItem: (state, item) => {
        state.cartTotal++

        if (item.name in state.cart) {
            state.cart[item.name].count++
        } else {
            let stateItem = Object.assign({}, item)
            stateItem.count = 1
            state.cart[item.name] = stateItem
        }
      },
      clearCartItems: (state) => {
        state.cart = {}
      },
      clearCartTotal: (state) => {
        state.cartTotal = 0
      }
    }
    // actions: {
    //   addToCart: ({ commit }) => {
    //     commit('addItem', item)
    //   }
    // }
})
