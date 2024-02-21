<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '@/features/products/store';
const productCart = useProductStore();
const props = defineProps({
  data: Object
});
const count = ref(1);
function increment() {
  count.value += 1;
  productCart.counterPlus(props.data?.id, 'plus');
}
function decrement() {
  if (count.value <= 1) {
    return;
  }
  count.value -= 1;
  productCart.counterPlus(props.data?.id, 'minus');
}
</script>

<template>
  <div class="w-[70%] ml-3 mt-6 flex">
    <div class="w-[60%] flex items-center gap-14 px-5">
      <div
        class="p-1 border border-slate-200 text-red-500 hover:bg-primary hover:text-white w-7 duration-500 ease-in-out rounded-full text-center h-7"
      >
        <i class="bx bx-x"></i>
      </div>
      <div
        class="w-[60px]"
        v-if="props.data?.media?.length"
      >
        <img
          :src="props.data?.media[0].media_link"
          alt=""
        />
      </div>
      <div class="text-[16px] text-primary">{{ props.data?.name }}</div>
    </div>
    <div class="w-[40%] items-center justify-around gap-5 flex">
      <div class="text-[16px] text-gray">{{ props.data?.price }}</div>
      <div
        class="border-primary items-center border-[2px] rounded-lg justify-around w-[85px] font-bold flex text-primary"
      >
        <div class="text-xl">
          {{ count }}
        </div>
        <div>
          <button
            @click="increment"
            class="block"
          >
            <i class="bx bx-chevron-up"></i>
          </button>
          <button @click="decrement">
            <i class="bx bx-chevron-down"></i>
          </button>
        </div>
      </div>
      <div class="text-[16px] text-gray">{{ props.data?.price }}</div>
    </div>
  </div>
</template>

<style scoped></style>
