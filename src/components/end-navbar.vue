<template>
  <nav class="hidden lg:flex justify-around items-center py-3 px-2  bg-[#253D4E]">
    <div class="items " v-for="item in categorylist">
      <div class="item flex items-center  my-auto gap-2">
        <div class="img w-[40px]">
          <img class="img w-[40px]" :src="'http://34.16.201.71:5000/'+item.image" alt="" srcset="" />
        </div>
        <div class="title">
          <p class="text-[14px] text-[#FFF] font-semibold" ><a class="no-underline list-none text-[#FFF]" href="#" @click="clickKey(item.id)">{{ item.name }}</a></p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCategory } from "@/features/products/composables/useCategory"
import { useProduct } from '@/features/products/composables/products';
const {productlist} = useProduct()

const {categorylist}= useCategory()

function clickKey(id:number| string | undefined){
  const filteredProducts = productlist.value.filter(product => product?.category_id === id);
  productlist.value = filteredProducts;
  
}

</script>

