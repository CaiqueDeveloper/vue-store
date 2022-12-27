<script setup>
import Product from './AppProduct.vue'
import { useGetters } from 'vuex-composition-helpers';



const { products } = useGetters({ products: 'products/getAllProducts' })    
</script>
<template>

    <div class="grid grid-cols-1 col-span-1 sm:grid-cols-4">
        <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>