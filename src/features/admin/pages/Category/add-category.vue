<template>
    <div class="block m-4">
      <button class="bg-primary hover:bg-orange px-4 py-2 text-white rounded-lg" @click="push">Back</button>
    </div>
    <div class="justify-center  items-center flex ">
      <div class="mx-auto  text-center px-10 py-8">
        <span class="font-[700]  text-3xl">Add Category</span><br />
        <input
          class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
          v-model="category.name"
          type="text"
          placeholder="Category name"
          name=""
          id=""
        /> <br>
        <input
          class="border-black  border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
          v-model="category.description"
          type="text"
          placeholder="Category description"
          name=""
          id=""
        /> <br>
        <input
            @change="handleUploadFile"
          class="border-black  border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
          type="file"
          ref="file"
          placeholder="Category image"
          accept=".png, .jpg, .jpeg"
          name=""
          id="imageUpload"
        /> <br>
        <button
          class="p-3 border-[1px] rounded-md w-[300px] text-md mt-2 bg-orange hover:bg-primary duration-500 ease-in-out"
          @click.prevent="handleClick"
          type="submit"
        >
        {{ 'Add Category' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
  import { useAdmin } from '@/features/admin/composables';
  import { adminRoute } from '@/constants/routes/admin';
  
  import { errorToast } from '@/utils/toast';
  import { useCategory } from '@/features/products/composables/useCategory';
  const { addCategory } = useCategory();

  const { router } = useAdmin();
  
  function push() {
    router.push({ name: adminRoute.RT_CATEGORY });
  }
  
  
  const category = reactive({
    name: '',
    description: '',
    image:''
  });
  
  async function handleClick  ()  {
    
    if (
      !category.name.length &&
      !category.description.length 
    ) {
      errorToast('Category did not pass Validation');
      return
    } 
    let formData = new FormData();

    formData.append('name', category.name)
    formData.append('description', category.description)
    formData.append('image', category.image)
  
     await addCategory(formData);
  
    category.name = '';
    category.description = '';
    category.image = '';
    
  };

  const handleUploadFile= async(event:any)=>{
    category.image = event?.target.files[0]
  }
  
  </script>
  
  <style scoped>
  </style>
  