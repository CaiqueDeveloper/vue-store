
import axios from 'axios'
const BASE_URL = 'https://fakestoreapi.com/products'

class ProductServices{
    getAll(){
        return axios.get(BASE_URL)
    }
} 
export default new ProductServices();