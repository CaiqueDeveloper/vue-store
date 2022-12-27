import { createStore } from 'vuex'
import products from './Models/Products'
import cart from './Models/Cart'
import utils from './Models/Utils'
export default createStore({
 
  modules: {
    products,
    cart,
    utils,
    
  }
})
