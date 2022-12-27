<script setup>
import Header from '@/components/Header/AppHeader.vue'
import Banner from '@/components/Banner/AppBanner.vue'
import Footer from '@/components/Footer/AppFooter.vue'
import Loading from '@/components/Utils/Loading/UtilsBaseLoading.vue'
import SideBar from '@/components/Utils/SideBar/UtilsBaseSideBar.vue'
import {useGetters,useStore } from 'vuex-composition-helpers';
    
    const store = useStore();
    store.dispatch('products/fetchProducts')
    store.dispatch('cart/fetchCart')

    let {showModal} = useGetters({showModal: 'products/getStateFetchRequest'})
    let {showSideBarCart} = useGetters({showSideBarCart: 'utils/getStateSideBarCart'})

</script>

<template>
  <!-- Header -->
  <Header />
  <!-- Banner -->
  <Banner />

  <router-view />
  <!-- Footer -->
  <Footer />
  <!-- Loading -->
  <Loading :showLoading="showModal" />
  <!-- Sidebar -->
  
  <SideBar v-if="showSideBarCart"/>
  
  
</template>
