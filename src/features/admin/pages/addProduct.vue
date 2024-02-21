<template>
  <div class="block m-4">
    <button
      class="bg-primary hover:bg-orange px-4 py-2 text-white rounded-lg"
      @click="push"
    >
      Back
    </button>
  </div>
  <div class="justify-center items-center flex">
    <div class="mx-auto text-center px-10 py-8">
      <span class="font-[700] text-3xl">Add Product</span><br />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 mr-5 rounded-md text-black w-[300px] text-xs"
        v-model="product.name"
        type="text"
        placeholder="Product name"
        name=""
        id=""
      />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.price"
        type="text"
        placeholder="Product   price"
        name=""
        id=""
      /><br />
      <input
        class="border-black mr-5 border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.description"
        type="text"
        placeholder="Product   description"
        name=""
        id=""
      />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.total_count"
        type="number"
        placeholder="Product   total_count"
        name=""
        id=""
      /><br />
      <input
        class="border-black mr-5 border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.mfg"
        type="text"
        placeholder="Product   mfg"
        name=""
        id=""
      />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.life"
        type="text"
        placeholder="Product   life"
        name=""
        id=""
      /><br />
      <input
        class="border-black mr-5 border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.qr_code"
        type="text"
        placeholder="Product   qr_code"
        name=""
        id=""
      />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.value"
        type="text"
        placeholder="Product   value"
        name=""
        id=""
      /><br />
      <input
        class="border-black mr-5 border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.brand"
        type="text"
        placeholder="Product   brand"
        name=""
        id=""
      />
      <input
        class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
        v-model="product.unit_of_measure"
        type="text"
        placeholder="Product   unit_of_measure"
        name=""
        id=""
      /><br />

        <select
        v-model="selectedCategory"
          id="categorySelect"
          class="border-black block mx-auto   border-[1px] p-3  outline-none mt-2 rounded-md text-black w-[300px] text-sm "
        >
          <option
            value=""
            disabled
          >
            Select Category
          </option>
          <option
            v-for="category in categorylist"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      <button
        class="p-3 border-[1px] rounded-md w-[300px] text-md mt-2 bg-orange hover:bg-primary duration-500 ease-in-out"
        @click.prevent="handleClick"
        type="submit"
      >
        {{ loading ? 'Loading...' : 'Next' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAdmin } from '@/features/admin/composables';
import { adminRoute } from '@/constants/routes/admin';

import { errorToast } from '@/utils/toast';

import { useProduct } from '@/features/products/composables/products';
import { useCategory } from '@/features/products/composables/useCategory';
import { addProductObj } from '@/features/products/modules/product';

const { addProduct, loading } = useProduct();
const { categorylist } = useCategory();

const { router } = useAdmin();

const selectedCategory = ref<string>('');


function push() {
  router.push({ name: adminRoute.RT_PRODUCTS });
}

const product = reactive<addProductObj>({
  name: '',
  price: '',
  description: '',
  total_count: 0,
  mfg: '',
  life: '',
  qr_code: '',
  value: '',
  brand: '',
  unit_of_measure: '',
  category_id:+(selectedCategory.value)
});

async function handleClick() {
  product.category_id = +selectedCategory.value
  
  if (
    !product.name.length &&
    !product.description.length &&
    !product.mfg.length &&
    !product.life.length &&
    !product.qr_code.length &&
    !product.value.length &&
    !product.brand.length &&
    !product.unit_of_measure.length &&
    !product.price.length &&
    !product.category_id

  ) {
    errorToast('Product did not pass Validation');
    return;
  } else if (product.total_count <= 0) {
    errorToast('Product did not pass Validation');
    return;
  }

  await addProduct(product);

  product.name = '';
  product.price = '';
  product.description = '';
  product.total_count = 0;
  product.life = '';
  product.mfg = '';
  product.qr_code = '';
  product.value = '';
  product.brand = '';
  product.unit_of_measure = '';

  router.push({ name: adminRoute.RT_ADD_MEDIA });
}
</script>

<style scoped></style>
