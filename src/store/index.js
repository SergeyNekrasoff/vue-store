import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: {
            stock: [],
            total: 0,
            totalPrice: 0,
            discounted: false,
            discount: 10
        },
        products: [
            {
                name: 'Bozlun W30',
                price: 3480,
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
            const discount = state.cart.discount
            const savedCartItems = [...state.cart.stock]
            const arrTotal = savedCartItems.map(({price, qty}) => {
                if (state.cart.discounted) {
                    const newPrice = Math.floor(price - (price * discount / 100))
                    price = Math.round(newPrice / 100) * 100
                }
                return Math.round(price * qty)
            })
            const result = parseInt(arrTotal.join())

            return result
        },
        getCheckDiscounted: (state) => state.cart.discounted
    },
    mutations: {
        pushProductToCart: (state, { item }) => {
            state.cart.total++
            state.cart.totalPrice += item.price
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
            state.cart.totalPrice += cartItem.price
        },
        decrementItemCart: (state, { id }) => {
            const cartItem = state.cart.stock.find(item => item.id === id)
            cartItem.qty--
            state.cart.total--
            state.cart.totalPrice -= cartItem.price
            if (state.cart.total === 0) {
                state.cart.discounted = false
            }
        },
        clearCartAndCheckout: (state) => {
            state.cart.stock = []
            state.cart.total = 0
            state.cart.totalPrice = 0
            state.cart.discounted = false
        },
        pullDiscount: (state, code) => {
            if (code.toLowerCase() === 'lol' && !state.cart.discounted) {
                state.cart.discounted = true
            }
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
        },
        checkPromo: ({ commit }, code) => {
            commit('pullDiscount', code)
        }
    }
})
