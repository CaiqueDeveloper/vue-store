import axios from 'axios'
const BASE_URL = 'https://fakestoreapi.com/carts/1'
const BASE_URL_POST = 'https://fakestoreapi.com/carts'

class CartServices{

    getAll(){
        return axios.get(BASE_URL)
    }
    create(data){
        return axios.post(BASE_URL_POST, data)
    }
}

export default new CartServices();