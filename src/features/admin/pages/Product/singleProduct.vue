<template>
    <div class="flex relative h-[600px]">
        <div class="p-2">
            <button @click="backList"
                class="p-2 rounded-lg bg-orange text-white w-[60px] hover:bg-[#3BB77E] hover:text-black">Back</button>
        </div>
        <div class="m-10 flex">
            <div class="w-[100%]">
                <swiper />
            </div>
            <div class="w-full ml-10">
                <p class="font-[600] text-lg mt-5 ">Name : <span class="ml-5 text-primary text-[30px]">{{ singleProduct.name
                }}</span></p>
                <p class="font-[600] text-lg mt-5 ">Price : <span class="ml-5 text-primary">{{ singleProduct.price }}</span>
                </p>
                <p class="font-[600] text-lg mt-5 ">Description : <span class="ml-5 text-primary text-[20px]">{{
                    singleProduct.description }}</span></p>
                <p class="font-[600] text-lg mt-5 ">Count : <span class="ml-5 text-primary">{{ singleProduct.total_count }}
                    </span></p>
                <div class="flex mb-10">
                    <div class="">
                        <p class="font-[600] text-lg mt-5 ">Brand : <span class="ml-5 text-primary">{{ singleProduct.brand
                        }}</span></p>
                        <p class="font-[600] text-lg mt-5 ">Life : <span class="ml-10 text-primary">{{ singleProduct.life
                        }}</span></p>
                        <p class="font-[600] text-lg mt-5 ">Mfg : <span class="ml-10 text-primary">{{ singleProduct.mfg
                        }}</span></p>
                    </div>
                    <div class="ml-10">
                        <p class="font-[600] text-lg mt-5 ">Unit_of_measure: <span class="ml-10 text-primary">{{
                            singleProduct.unit_of_measure }}</span></p>
                        <p class="font-[600] text-lg mt-5 ">Qr_code : <span class="ml-20 text-primary">{{
                            singleProduct.qr_code }}</span></p>
                        <p class="font-[600] text-lg mt-5 ">Active : <span class="ml-20 text-primary">{{
                            singleProduct.is_active }}</span></p>
                    </div>
                </div>
                <button @click="edited" class=""><i class='bx bx-edit-alt bx-md text-primary '></i></button>
                <button @click="open" class="ml-10"><i class='bx bx-trash bx-md text-red-700'></i></button>
                <DialogWrapper />
            </div>

            <div v-show="showUpdate" class="absolute bg-primary p-5 w-[70%] ml-[10%] mr-[10%] mt-[10%] rounded-xl">
                <div class="flex justify-between">
                    <p class="text-lg">Name : <input class="p-1 outline-none rounded-lg ml-12 mt-2"
                            v-model="singleProduct.name" type="text" name="name" id=""> </p>
                    <i @click="canceled" class='bx bx-x bx-black bx-lg hover:bg-red-600 rounded-lg'></i>
                </div>
                <p class="text-lg">Price : <input class="p-1 outline-none rounded-lg ml-14 mt-2"
                        v-model="singleProduct.price" type="text" name="price" id=""> </p>
                <p class="text-lg">Description : <input class="p-1 outline-none rounded-lg ml-1 mt-2"
                        v-model="singleProduct.description" type="text" name="description" id=""> </p>
                <p class="text-lg">Count : <input class="p-1 outline-none rounded-lg ml-12 mt-2"
                        v-model="singleProduct.total_count" type="number" name="total_count" id=""> </p>

                <div class="flex mb-10">
                    <div class="">
                        <p class="text-lg">Brand: <input class="p-1 outline-none rounded-lg mt-2"
                                v-model="singleProduct.brand" type="text" name="brand" id=""> </p>
                        <p class="text-lg">Life : <input class="p-1 outline-none rounded-lg mt-2"
                                v-model="singleProduct.life" type="text" name="life" id=""> </p>
                        <p class="text-lg">MFG : <input class="p-1 outline-none rounded-lg mt-2" v-model="singleProduct.mfg"
                                type="text" name="mfg" id=""> </p>
                    </div>
                    <div class="ml-10">
                        <p class="text-lg">Unit of measure : <input class="p-1 outline-none rounded-lg "
                                v-model="singleProduct.unit_of_measure" type="text" name="unit_of_measure" id=""> </p>
                        <p class="text-lg">QR CODE : <input class="p-1 outline-none rounded-lg mt-2"
                                v-model="singleProduct.qr_code" type="text" name="qr_code" id=""> </p>
                        <p class="text-lg">Value : <input class="p-1 outline-none rounded-lg mt-2"
                                v-model="singleProduct.value" type="text" name="value" id=""> </p>
                    </div>
                </div>
                <button @click="saved"
                    class="p-2 bg-orange w-[100px] rounded-lg hover:bg-blue-600 hover:text-white">Saved</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useProduct } from "@/features/products/composables/products"
import router from "@/router";
import { adminRoute } from "@/constants/routes/admin";
import swiper from "./swiper.vue"

import { confirm } from '@/ts/dialog';
import {DialogWrapper} from 'vue3-promise-dialog';

const { singleProduct, fetchOneProduct, route, deleteProduct, updateProduct } = useProduct()
const showUpdate = ref(false)
const id = ref()



// const updated = reactive({
//     id:String(route.params.id),
//     name:singleProduct.value.name,
//     description:"",
//     total_count:1,
//     price:"",
//     mfg:"",
//     life:"",
//     qr_code:"",
//     unit_of_measure:"",
//     value:"",
//     brand:"",
// })

onMounted(async () => {
    id.value = String(route.params.id)
    await fetchOneProduct(id.value)
})


async function edited() {
    showUpdate.value = true
}

async function canceled() {
    showUpdate.value = false
}

const backList = async () => {
    router.push({ name: adminRoute.RT_PRODUCTS })
}



async function saved() {
    await updateProduct({ id:id.value, name: singleProduct.value.name, description: singleProduct.value.description, total_count: singleProduct.value.total_count,price:singleProduct.value.price, mfg:singleProduct.value.mfg, life:singleProduct.value.life, qr_code:singleProduct.value.qr_code,value:singleProduct.value.value, brand:singleProduct.value.brand, unit_of_measure:singleProduct.value.unit_of_measure })
}



async function open() {

  if (await confirm('Are you sure?')) {
    const id = String(route.params.id)
    await deleteProduct(id)
  } else {
    
  }
}

</script>
