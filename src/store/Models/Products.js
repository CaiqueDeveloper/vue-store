
import ProductServices from "@/services/Product/ProcutServices"
// initial state
const state = () => ({
    products: [],
    product: [],
    showModal: false
})



const mutations = {

    setProducts(state, products) {
        state.products = products
    },
    setShowModal(state, products) {
        state.showModal = products
    },

    getProduct(state, id){

        const index = state.products.findIndex((product) => product.id == id);
        state.product = state.products[index]
       
    }
}
const actions = {

    fetchProducts({ commit }) {

        return ProductServices.getAll().then(
            products =>{
            commit('setProducts', products.data)
            commit('setShowModal', true)

            return Promise.resolve(products.data)
        })
    },
    getProduct({ commit },id){

        return commit('getProduct', id)
    }
    
}
const getters = {
    getStateFetchRequest(state){
        return state.showModal;
    },
    getAllProducts(state){
        return state.products
    },
    getProduct(state){
        return state.product
    }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}