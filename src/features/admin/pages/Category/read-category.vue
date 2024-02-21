<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else-if="categorylist.length!=0">
    <div class="flex justify-center items-center gap-5 flex-wrap py-8">
    <div  v-for="item in categorylist" :key="item.id">
      <div @click="singlePage(item.id?.toString()?? '')"  class="border text-slate-300 rounded-xl flex w-[300px] h-[100px] py-4 px-6 justify-center items-center" >
        <div class="w-[30%]">
              <img
                class="w-[100%]"
                :src="'http://localhost:4000/'+item.image"
                alt=""
              /> 
        </div>
        <div class="w-[100%] ml-[10%]">
          <div><h2 class="font-bold text-slate-800">{{ item.name }}</h2></div>
          <div class="flex text-primary font-bold gap-3 items-baseline mt-2">
            <span class="text-[10px]">{{ item.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div v-else>
    <empty/>
  </div>
</template>

<script setup lang="ts">
import {useCategory} from "@/features/products/composables/useCategory"
import router from "@/router"
import {adminRoute} from "@/constants/routes/admin"
import Loading from "@/components/loading.vue";
import empty from '@/components/empty.vue';


const { loading, categorylist } = useCategory()


async function singlePage(id:string) {
  await router.push({name:adminRoute.RT_SINGLE_CATEGORY,params:{id}})
  
}


</script>

<style scoped></style>
