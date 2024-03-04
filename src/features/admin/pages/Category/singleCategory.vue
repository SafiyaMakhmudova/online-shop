<template>
  <div class="flex relative h-[600px]">
    <div class="p-2">
      <button @click="backList"
        class="p-2 rounded-lg bg-orange text-white w-[60px] hover:bg-[#3BB77E] hover:text-black">
        Back
      </button>
    </div>
    <div class="flex m-10">
      <div class="w-[80%]">
        <img class="w-[400px] h-[300px] rounded-lg" :src="'http://localhost:4000/' + singleCategory.image" alt="" />
      </div>
      <div class="w-full ml-10">
        <p class="font-[600] text-lg mt-5">
          Category Name :
          <span class="ml-5 text-primary text-[30px]">{{ singleCategory.name }}</span>
        </p>
        <p class="font-[600] text-lg mt-5">
          Description :
          <span class="text-primary text-[20px] ml-5">{{ singleCategory.description }}</span>
        </p>
        <div class="mb-5">
          <p class="font-[600] text-lg mt-5">
            Create Date : <span class="ml-5 text-primary">{{ singleCategory.createdAt }}</span>
          </p>
          <p class="font-[600] text-lg mt-5">
            Update Date : <span class="ml-10 text-primary">{{ singleCategory.updatedAt }}</span>
          </p>
        </div>
        <button @click="edited" class="">
          <i class="bx bx-edit-alt bx-md text-primary"></i>
        </button>
        <button @click="open" class="ml-10">

          <i class="bx bx-trash bx-md text-red-700"></i>
        </button>
        
        <div v-if="dialog" class="border-2 rounded-sm text-center absolute  bg-zinc-300       top-[30%]">
          <div class=" text-right p-0 text-2xl text-red-700 ">
          </div>
          <h2 class="text-xl  px-5 py-3">Are you sure?</h2>
          <div class="flex justify-center text-lg gap-10 px-5 pb-4">
            <button @click="remove">Yes</button>
            <button @click="open">No</button>
          </div>

        </div>
      </div>
      


      <div v-show="showUpdate" class="absolute bg-primary p-5 w-[50%] ml-[10%] mr-[10%] mt-[10%] rounded-xl">
        <div class="flex justify-between">
          <p class="text-lg">
            Category Name :
            <input class="p-1 outline-none rounded-lg ml-2 mt-2" v-model="singleCategory.name" type="text" name="name"
              id="" />
          </p>
          <i @click="canceled" class="bx bx-x bx-black bx-lg hover:bg-red-600 rounded-lg"></i>
        </div>
        <p class="text-lg">
          Description :
          <input class="p-1 outline-none rounded-lg ml-10 mt-2" v-model="singleCategory.description" type="text"
            name="description" id="" />
        </p>
        <button @click="saved" class="p-2 bg-orange w-[100px] rounded-lg hover:bg-blue-600 hover:text-white">
          Saved
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCategory } from '@/features/products/composables/useCategory';

import router from '@/router';
import { adminRoute } from '@/constants/routes/admin';
import { updateCategory } from '@/features/products/modules/category';

const { singleCategory, route, deleteCategory, updateCategory, fetchOneCategory } = useCategory();

const showUpdate = ref<boolean>(false);
const dialog = ref<boolean>(false);

async function edited() {
  showUpdate.value = true;
}

async function canceled() {
  showUpdate.value = false;
}

async function saved() {
  await updateCategory({id:+route.params?.id,name:singleCategory.value?.name, description:singleCategory.value.description});
}

onMounted(async () => {
  const id = String(route.params.id);
  await fetchOneCategory(id);
});

const backList = async () => {
  router.push({ name: adminRoute.RT_CATEGORY });
};

async function open() {
  dialog.value = !dialog.value
}

async function remove() {
    const id = String(route.params.id)
    await deleteCategory(id)
    dialog.value = !dialog.value
}


</script>
