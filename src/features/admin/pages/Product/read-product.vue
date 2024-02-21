<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else-if="productlist.length != 0">
    <div class="flex justify-center items-center gap-5 flex-wrap py-8">
      <div v-for="item in productlist" :key="item.id">
        <div @click="singlePage(item.id?.toString() ?? '')"
          class="border text-slate-300 rounded-xl flex w-[300px] h-[100px] py-4 px-6 justify-center items-center">
          <div class="w-[30%]">
            <img v-if="item.media.length > 0" class="w-[100%]" :src="item.media[0].media_link" alt="" />
          </div>
          <div class="w-[100%] ml-[10%]">
            <div>
              <h2 class="font-bold text-slate-800">{{ item.name }}</h2>
            </div>
            <div class="flex text-primary font-bold gap-3 items-baseline">
              <span class="text-[20px]">$80.00</span>
              <s class="text-slate-400">$<s class="text-[13px] text-slate-400">{{ item.price }}</s></s>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <empty />
  </div>
</template>
  
<script setup lang="ts">
import { useProduct } from "@/features/products/composables/products"

import router from "@/router"
import { adminRoute } from "@/constants/routes/admin"
import Loading from "@/components/loading.vue";
import empty from '@/components/empty.vue';

const { productlist, loading } = useProduct()


async function singlePage(id: string) {
 await router.push({ name: adminRoute.RT_SINGLE_PRODUCT, params: { id } })

}


</script>
  
<style scoped></style>
  