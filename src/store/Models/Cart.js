
import CartServices from "@/services/Cart/CartServices"


const state = () => ({
    cart: []
})

const mutations = {
    setItemCart(state, cart) {
        state.cart = cart
    },
  
}
const actions = {
    fetchCart({ commit, rootState }) {
        return CartServices.getAll().then(
            cart => {
                
                for(let i in cart.data.products){
                    cart.data.products[i].title = rootState.products.products[i].title
                    cart.data.products[i].image = rootState.products.products[i].image
                    cart.data.products[i].price = rootState.products.products[i].price*cart.data.products[i].quantity
                }

                commit('setItemCart', cart.data.products)
                return Promise.resolve(cart.data)
            })
    }
}

const getters = {
    totalItemCart(state) {
        return state.cart.length
    },
    cart(state) {
        return state.cart
    },
    totalPriceCart(state) {
        return state.cart.reduce( (total, amount) => total + amount.price, 0)
    },
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}