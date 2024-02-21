<template>
  <div class="flex">
    <div
      class="w-1/4 sidebar flex flex-col gap-2 max-h-[430px] overflow-y-scroll sticky"
    >
      <img
        v-for="(image, index) in singleProduct?.media"
        :key="index"
        @click="selectImg(index)"
        class="w-full h-[100px] object-cover bg-gray-100"
        :src="image.media_link"
        :class="index == currentIndex ? 'border-2 border-[#7000FF]' : ''"
      />
      
    </div>
    <div class="w-3/4">
      <div class="h-[430px] relative px-4" v-for="i in [currentIndex]" :key="i">
        <span
          class="text-lg cursor-pointer text-gray-100 font-bold absolute top-1/2 left-2 -translate-y-1/2 bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('prev')"
          >&#10094;
        </span>
        <img
          class="w-full h-full object-cover bg-gray-100" 
          :src="(img || (singleProduct.media?.length && singleProduct.media[currentIndex].media_link))"
        />
        <span
          class="text-lg cursor-pointer text-gray-100 font-bold absolute top-1/2 right-2 -translate-y-1/2 bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('next')"
          >&#10095;
        </span>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

import { useProduct} from "../../../products/composables/products"
const {singleProduct} =  useProduct()

const currentIndex = ref(0);
const img = ref("");

function selectImg(i) {
  currentIndex.value = i;
  img.value = singleProduct.value?.media[i].media_link;
}

function changedByArrow(str) {
  if (str == "next") {
    if (currentIndex.value !== singleProduct.value.media?.length - 1) {
      currentIndex.value += 1;
    } else {
      currentIndex.value = 0;
    }
  } else {
    if (currentIndex.value === 0) {
      currentIndex.value = 0;
    } else {
      currentIndex.value -= 1;
    }
  }
  img.value = singleProduct.value?.media[currentIndex.value].media_link[Math.abs(currentIndex.value) % singleProduct.value?.media[currentIndex.value].length];
}
</script>


<style scoped>
.sidebar::-webkit-scrollbar {
  display: none;
}
</style>