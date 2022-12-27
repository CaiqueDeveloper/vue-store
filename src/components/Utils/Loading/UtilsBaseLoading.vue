<script>
export default {
    props:{
        showLoading:{
           type: Boolean,
           default: false
        }
    }
}
</script>
<template>
    <div class="w-full h-screen backdrop-opacity-10 backdrop-invert bg-black/50 absolute top-0 left-0 flex items-center justify-center" v-if="!showLoading">
        <img src="@/assets/img/spinner.svg" alt="loading" >
    </div>
</template>