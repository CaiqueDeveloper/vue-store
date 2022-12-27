import { ref } from 'vue';
import { useStore } from 'vuex';

export default ()=>{
    

    const store = useStore()
    

    let productModal = ref({})
    let showModal = ref(false)

    const getProduct = (event) => {

        const product_id = event.currentTarget.getAttribute('value')
        store.dispatch('products/getProduct', product_id)

        productModal.value = store.getters['products/getProduct']
        showModal.value = true

    }

    const closedModal =()=>{
        showModal.value = false
    }

    return{
        closedModal,
        getProduct,
        showModal,
        productModal

    }
}