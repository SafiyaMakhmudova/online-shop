<template>
  <div class="m-4 p-2">
    <div>
      <button
        class="p-2 bg-yellow-500 transition duration-700 ease-in-out  hover:text-primary font-semibold rounded-lg text-white float-right"
      @click="push">
        Add product
      </button>
    </div>
    <div>
      <readProduct />
    </div>
  </div>
</template>

<script setup lang="ts">
import readProduct from '@/features/admin/pages/Product/read-product.vue';
import { useAdmin } from '@/features/admin/composables';
import { adminRoute } from '@/constants/routes/admin';
const {router} = useAdmin();

function push () {
    router.push({name:adminRoute.RT_ADD_PRODUCT})
}

</script>

<style scoped></style>
