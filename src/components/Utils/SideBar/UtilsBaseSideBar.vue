<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters({
        cartItem: 'cart/cart',
        totalPriceCart: 'cart/totalPriceCart'
    }),

    methods: {
        showSideBarCart() {
            this.$store.dispatch('utils/changeStateSideBarCart')
        }
    },
}
</script>
<template>
    
    <section
        class="content-modal">
        <!-- drawer component -->
        <div id="drawer-right-example" class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
            tabindex="-1" aria-labelledby="drawer-right-label">
            <h5 id="drawer-right-label"
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg
                    class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <slot name="sideBarTitle">
                    Cart Items
                </slot>
            </h5>
            <button type="button" data-drawer-dismiss="drawer-right-example" aria-controls="drawer-right-example" @click="showSideBarCart"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                <slot name="sideBarBody">
                    <h4 class="text-gray-600 font-medium flex mb-6 text-xl mr-3"> Total: <p class="text-green-600">$ {{totalPriceCart}}</p></h4>
                    <section class="w-full h-20 border-gray-300 shadow-sm my-6 shadow-gray-400 rounded-md  px-2 py-2 "   v-for="cart in cartItem" :key="cart.productId">
                       <div class="item flex justify-between items-center">
                            <img :src="cart.image" :alt="cart.title" width="50">
                            <p class="text-xl font-bold text-green-600">$ {{cart.price}}</p>
                            <section class="text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </section>
                       </div>
                    </section>
                </slot>
            </div>
           
        </div>
    </section>
</template>