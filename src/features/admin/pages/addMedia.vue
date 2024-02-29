<template>
    <div class="block m-4">
      <button class="bg-primary hover:bg-orange px-4 py-2 text-white rounded-lg" @click="push">Back</button>
    </div>
    <div class="justify-center  items-center flex ">
      <div class="mx-auto  text-center px-10 py-8">
        <span class="font-[700]  text-3xl">Add Product Image</span><br />
        <input
          class="border-black border-[1px] p-3 outline-none mt-2 mr-5 rounded-md text-black w-[300px] text-xs"
          v-model="media.product_id"
          type="text"
          placeholder="Product id"
          name=""
          id=""
        />
        <input
          class="border-black border-[1px] p-3 outline-none mt-2 rounded-md text-black w-[300px] text-xs"
          v-model="media.media_link"
          type="text"
          placeholder="Product image link"
          name=""
          id=""
        /><br/>
        <button
          class="p-3 border-[1px] rounded-md w-[300px] text-md mt-2 bg-orange hover:bg-primary duration-500 ease-in-out"
          @click.prevent="handleClick"
          type="submit"
          
        :disabled="buttonDisable"
        >
         
        {{ loading ? 'Loading...' : 'Add' }} 
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { useAdmin } from '@/features/admin/composables';
  import { adminRoute } from '@/constants/routes/admin';
  
  import { errorToast } from '@/utils/toast';
  import { useMedia } from '@/features/products/composables/media';
  
  import { useProduct } from '@/features/products/composables/products';
  import { mediaObj } from '@/modules/interfaces';

  const { addMedia, loading } = useMedia();
  const { addedProoduct } = useProduct();
  
  const { router } = useAdmin();
  const buttonDisable = ref(false)

  function push() {
    router.push({ name: adminRoute.RT_PRODUCTS });
  }
  
  
  const media = reactive<mediaObj>({
    product_id:addedProoduct.value.id,
    media_link: '',
  });
  
  
  async function handleClick  ()  {
    if (
      !media.product_id ||
      !media.media_link 
    ) {
      buttonDisable.value = false
      errorToast('Image did not pass Validation');
     
      return
    }
  
    await addMedia({product_id:+media.product_id, media_link:media.media_link});
    buttonDisable.value = true
    media.media_link = '';
  };
  
  </script>
  
  <style scoped>
  </style>
  