<template>
  <aside class="bg-slate-100 px-3">
    <div class="top ">
      <span class="top-text">Senior's Member Discount Days! Save 25% Each Tuesday</span>
    </div>
    <div class="  w-[100%] py-[10px] flex justify-between">
      <div class=" search w-[33%] flex border-green rounded-md border-[2px] justify-between p-3 bg-white">
        <div class="searchtext flex gap-4 items-center justify-around">
          <button class="text-[15px] font-bold text-gray  ">{{ t('appbar.category') }}</button>

          <n-dropdown trigger="click" :options="options" :show-arrow="true" @select="handleSelect"
            class="hover:bg-green    ">
            <n-button class="bx bx-chevron-down text-[25px] text-slate-400 cursor-pointer"></n-button>
          </n-dropdown>

          <span class="text-slate-400">|</span>
        </div>
        <input v-model="productName.name" class="h-7 outline-none searchinput" type="text"
          :placeholder="t('appbar.search')" />
        <i @click="searchProducts" class="bx bx-search-alt-2 text-xl text-slate-400 cursor-pointer"></i>
      </div>

      <div class="flex items-center gap-14 justify-between top3">
        <button
          class="bg-primary text-white font-bold rounded-lg py-2 px-7 text-[16px] hover:bg-orange hover:text-black duration-500 ease-in-out">
          {{ t('appbar.button') }}
        </button>
        <div class="flex items-center gap-2">
          <i class="bx bx-heart text-2xl"></i>
          <router-link to="/wishlist"><span class="text-slate-500 text-[15px]">{{ t('appbar.wishlist') }}</span>
          </router-link>
        </div>

        <div class="flex items-center gap-2">
          <i class="bx bx-git-compare text-2xl"></i>
          <span class="text-slate-500 text-[15px]">{{ t('appbar.compare') }}</span>
        </div>

        <router-link to="/product/cart" class="flex items-center text-xl">
          <div class="relative" :class="getProduct?.length ? 'mr-2' : 'mr-1'">
            <i class="bx bx-cart-alt text-2xl"></i>
            <div v-if="getProduct?.length"
              class="absolute top-3 -right-[5px] w-4 h-4 rounded-full bg-[#7000FF] text-[9px] text-white flex items-center justify-center font-semibold">
              {{ getProduct?.length }}
            </div>
          </div>
          <span class="text-sm">{{ t('appbar.cart') }}</span>
        </router-link>

        <div class="flex items-center gap-2">
          <i class="bx bx-user text-2xl"></i>
          <router-link to="/account"><span class="text-slate-500 text-[15px]">{{ t('appbar.account') }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { NDropdown, NButton } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from "pinia";
import { ref } from 'vue';

import { useCategory } from '@/features/products/composables/useCategory';
import { useProduct } from '@/features/products/composables/products';

import { useCartStore } from "@/features/products/store/cart";
import { searchProductObj } from '@/modules/interfaces';

const cartStore = useCartStore();
const { getProduct } = storeToRefs(cartStore);
const { t } = useI18n();
const { options, } = useCategory()
const { productlist } = useProduct()
const { SearchProductByName } = useProduct()

const productName = ref<searchProductObj>({
  name: ''
});


async function handleSelect(key: number) {
  const filteredProducts = productlist.value.filter(product => product.category_id === key);
  productlist.value = filteredProducts;

}


async function searchProducts() {
  await SearchProductByName(productName.value);
  productName.value.name = ''
}
</script>

<style scoped>
@media (min-width: 320px) {
  .top {
    margin-top: 5px;
    color: #253D4E;
    text-align: center;
    font-weight: 600;
    margin-bottom: 15px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-image: url("https://themepanthers.com/wp/nest/d3/wp-content/themes/steelthemes-nest/assets/images/notice.jpg");
  }
}

@media (min-width: 980px) {
  .top {
    display: none;
  }
}
</style>
