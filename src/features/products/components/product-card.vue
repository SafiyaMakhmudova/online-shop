<template>
  <div
    class="main w-[150px] h-[378px] md:w-[100px] lg:w-[250px] my-4 relative p-5 justify-around border border-slate-200 hover:shadow-lg shadow-slate-800 duration-500 ease-in-out cursor-pointer rounded-lg">
    <div class="bg-orange w-[27%] absolute top-2 left-0 text-center">39%</div>
    <div class="w-[194px] h-[194px] mx-auto">
      <img @click="onProductSelected(props.data?.id)" class="mx-auto mb-2" :src="props.data?.media[0]?.media_link" alt="" />
    </div>
    <div class="text-slate-400 text-sm mb-2">
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <span class="ml-2">0</span>
    </div>
    <div>
      <h1 class="font-bold text-lg text-gray-600 mb-3 w-[100%]">
        {{ props.data?.name.slice(0, 40) + '...' }}
      </h1>
    </div>
    <div class="flex text-primary font-bold gap-3 items-baseline">
      <span class="text-[20px]">{{ props.data?.price }}</span>
      <s class="text-slate-400">$<s class="text-[13px] text-primary">130.00</s></s>
    </div>
    <div
      class="cover absolute top-0 left-0 w-full opacity-0 invisible duration-200 h-full z-10 text-white rounded-lg rounded-t-none">
      <div class="flex justify-center">
        <div class="text-primary text-center">
          <i class="bx bx-show w-10 bg-white text-2xl"></i>
          <i class="bx bx-git-compare w-10 bg-white text-2xl border border-t-0 border-b-0"></i>
        </div>
        <div @click="addDataToLike" class="text-center">
          <i v-if="addedLike" class="bx bxs-heart text-2xl w-10 bg-white text-red-600"></i>
          <i v-else class="bx bx-heart w-10 text-primary bg-white text-2xl"></i>
        </div>
      </div>
      <div class="text-slate-500 mt-[135px] m-5 text-[16px]">
        {{ props.data?.total_count }} in stock
      </div>
      <div class="border justify-between flex w-[84%] mx-auto h-10 rounded-full">
        <button @click="decrement" class="bg-orange w-[21%] rounded-full">
          <i class="bx bx-minus"></i>
        </button>
        <div class="text-black">
          {{ count }}
        </div>
        <button @click="increment" class="bg-orange w-[21%] rounded-full">
          <i class="bx bx-plus"></i>
        </button>
      </div>

      <div class="mt-3 text-center" @click="addDataToCart">
        <button v-if="addedCart" class="py-3 px-14 rounded-full bg-orange text-black">
          In your basket
        </button>
        <button v-else class="
        py-3 px-14 rounded-full bg-primary text-white transition-transform transform duration-700 hover:scale-110
        ">
          Add to Cart
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/features/products/store/cart';
import { useLikeStore } from '@/features/products/store/like';
import { writeToLocaleStorage, checkFromLocaleStorage } from '@/hooks/localeStorage';
import { useProductstore } from '@/features/products/store/productStore';
import { productRoute } from '@/constants/routes/product';
import router from '@/router';


const productCart = useProductstore();
const cartStore = useCartStore();
const likeStore = useLikeStore();

const props = defineProps({
  data: Object
});

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

function onProductSelected(id) {
  router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } });
}

const addedCart = ref(false);
function addDataToCart() {
  addedCart.value = writeToLocaleStorage('myProduct', cartStore, props.data);
}

const addedLike = ref(false);
function addDataToLike() {
  addedLike.value = writeToLocaleStorage('myLike', likeStore, props.data);
}

onMounted(() => {
  addedCart.value = checkFromLocaleStorage('myProduct', props.data);
  addedLike.value = checkFromLocaleStorage('myLike', props.data);
  count.value = props.data?.count || 1;
});
</script>

<style scoped>
.main:hover .cover {
  opacity: 1;
  visibility: visible;
  top: 45%;
}

.main:hover {
  box-shadow: none;
  border: none;
}
</style>
