<template>
    <div>
        <endNavbar/>
        <slider/>
        <productCard/> 
        <threeCard/>
        <productListMiddle/>
    </div>
    
</template>

<script setup lang="ts">
import endNavbar from '@/components/end-navbar.vue'
import slider from '@/components/slider.vue'
import productCard from '@/features/products/components/card.vue';
import productListMiddle from "@/features/products/components/productlist-middle.vue"
import threeCard from "@/features/products/components/top-three-card.vue"

</script>

<style  scoped>

</style>

