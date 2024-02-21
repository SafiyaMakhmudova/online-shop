<template>
  <div class="flex justify-center items-center gap-5 flex-wrap py-8">
    <div  v-for="(item,index) in arr" :key="index">
      <div class="border text-slate-300 rounded-xl flex w-[300px] py-4 px-6  ">
        <div class="w-[40%]">
          <img
            class="w-[100%]"
            :src="item"
            alt=""
          />
        </div>
        <div class="w-[60%]">
          <div><h2 class="font-bold text-xl text-slate-800">Red Apple</h2></div>
          <div class="text-slate-400 text-sm mb-2">
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <span class="ml-2">0</span>
          </div>
          <div class="flex text-primary font-bold gap-3 items-baseline">
            <span class="text-[20px]">$80.00</span>
            <s class="text-slate-400">$<s class="text-[13px] text-slate-400">130.00</s></s>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let arr = ref([
  "http://localhost:3000/src/assets/images/apple.webp",
  "http://localhost:3000/src/assets/images/apple.webp",
  "http://localhost:3000/src/assets/images/apple.webp",
  "http://localhost:3000/src/assets/images/apple.webp",
])

</script>

<style scoped></style>
