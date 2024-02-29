<template>
  <hr class="text-slate-200" />
  <div class="flex m-[80px] w-[100%]">
    <div class="w-[50%]">
      <swiper/>
    </div>
    <div class="w-[30%] mx-[50px]">
      <div>
        <div class="bg-pink-200 font-bold py-[5px] w-14 px-[12px] rounded-md text-emerald-500">
          Sale!
        </div>
      </div>
      <h1 class="font-bold text-[38px] text-text mt-3">{{ singleProduct.name }}</h1>
      <p class="text-[16px] text-gray mt-4">Remains until the end of the offer</p>
      <div class="flex w-[100%] gap-1 text-center mt-1">
        <div class="w-1/6 text-primary text-[20px] shadow-md">
          387<span class="block text-text text-[15px]">Days</span>
        </div>
        <div class="w-1/6 text-primary text-[20px] shadow-md">
          13<span class="block text-text text-[15px]">Hours</span>
        </div>
        <div class="w-1/6 text-primary text-[20px] shadow-md">
          33<span class="block text-text text-[15px]">Mins</span>
        </div>
        <div class="w-1/6 text-primary text-[20px] shadow-md">
          03<span class="block text-text text-[15px]">Secs</span>
        </div>
      </div>
      <div class="text-slate-300 text-lg mt-7">
        <i class="bx bx-star"></i>
        <i class="bx bx-star"></i>
        <i class="bx bx-star"></i>
        <i class="bx bx-star"></i>
        <i class="bx bx-star"></i>
        <span class="text-[16px] text-primary ml-2">(2 customer reviews)</span>
      </div>
      <div class="flex text-primary font-bold gap-3 items-baseline mt-3">
        <s class="text-[23px] text-emerald-200">$100.00</s>
        <span class="text-[23px]">{{ singleProduct.price }}</span>
      </div>
      <div class="mt-3 text-[16px] text-slate-500">
        {{singleProduct.description}}
      </div>
      <div class="text-yellow-600 text-[16px] mt-5">{{ singleProduct.total_count }} in stock</div>
      <div class="flex gap-1 mt-4">
        <div
          class="border-primary items-center border-[2px] rounded-lg justify-around w-[85px] font-bold flex text-primary">
          <div class="text-xl">
            {{ count }}
          </div>
          <div>
            <button @click="increment" class="block">
              <i class="bx bx-chevron-up"></i>
            </button>
            <button @click="decrement">
              <i class="bx bx-chevron-down"></i>
            </button>
          </div>
        </div>
        <div>
          <button
            class="bg-primary py-3 px-10 rounded-lg text-[16px] hover:bg-orange duration-500 ease-in-out text-white font-bold">
            Add to cart
          </button>
        </div>
      </div>
      <div class="flex gap-1 mt-5">
        <button class="border-[1px] py-3 px-8 rounded-lg text-[18px] border-slate-200 text-text font-bold">
          Compare
        </button>
        <button class="border-[1px] py-3 px-8 rounded-lg text-[17px] border-slate-200 text-text font-bold">
          Add to wishlist
        </button>
      </div>
      <div class="flex justify-between w-[100%] text-lg mt-6">
        <div class="w-[40%]">
          <div class="text-slate-500">MFG: <span class="text-primary">{{ singleProduct.mfg }}</span></div>
          <div class="text-slate-500">LIFE: <span class="text-primary">{{ singleProduct.life }}</span></div>
        </div>
        <div class="w-[60%]">
          <div class="text-slate-500">SKU: <span class="text-primary">{{ singleProduct.qr_code }}</span></div>
          <div class="text-slate-500">
            Category: <span class="text-primary">{{ singleProduct?.category?.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductstore } from '@/features/products/store/productStore';
import { useProduct } from "@/features/products/composables/products";
import swiper from '@/features/admin/pages/Product/swiper.vue'

const { singleProduct, fetchOneProduct, route } = useProduct();
const productCart = useProductstore();

const props = defineProps({
  data: Object
});

import { ref, onMounted } from 'vue';
const count = ref(0);
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

onMounted(() => {
  count.value = props.data?.count || 1;
});

onMounted(async () => {
  await fetchOneProduct(route.params.id);
});

</script>

<style scoped></style>
