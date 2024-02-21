<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else-if="productlist.length!=0" class="flex justify-center items-center gap-5 flex-wrap py-10">
    <productCard v-for="product in productlist" :key="product?.id" :data="product" />
  </div>
  <div v-else> 
    <empty/>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/features/products/composables/products'
import productCard from "@/features/products/components/product-card.vue"
import Loading from '@/components/loading.vue'
import empty from '@/components/empty.vue';

const  {productlist, loading}  = useProduct();


</script>

<style scoped></style>  
