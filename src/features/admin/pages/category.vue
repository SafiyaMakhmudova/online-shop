<template>
    <div class="m-4">
      <button
        class="p-2 bg-yellow-500 transition duration-700 ease-in-out  hover:text-primary font-semibold rounded-lg text-white float-right"
      @click="addCategorypage">
        Add category
      </button>
    </div>
    <div>
        <readCategory/>
    </div>
</template>

<script setup lang="ts">
import readCategory from '@/features/admin/pages/Category/read-category.vue';
import router from '@/router';
import { adminRoute } from '@/constants/routes/admin';

const addCategorypage = ()=>{
    router.push({name:adminRoute.RT_ADD_CATEGORY})
}

</script>

<style scoped>

</style>
