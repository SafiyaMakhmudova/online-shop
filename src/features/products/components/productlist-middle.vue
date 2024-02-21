<template>
  <div class=" bg-[#F1FCFC] pt-10  wrap">
      <div class="justify-between flex ml-[130px]">
        <p class="font-[700] text-xl">Deals Of The Day</p>
        <p class="text-xs text-[#4CBB85] mr-[130px]">View All Offer ></p>
      </div>
      <div class="flex flex-wrap ml-[125px] bg-[#F1FCFC] mt-5 ">
        <div  v-for="product in productlist" :key="product.id" class="mr-5 justify-center items-center ">
          <div class="h-[100px] w-[160px]  rounded-md bg-white">
            <img class="ml-8 hover:w-[103px] duration-500" width="100px" height="100px" :src="product?.media[0]?.media_link" alt="">
          </div>
          <div>
            <p class="font-[600] text-md mt-2 text-md text-center">{{ product.name }}</p>
            <p class="text-[#7E7E7E] mb-5 text-xs text-center">{{ product.total_count }} products</p>
          </div>
        </div>
      </div>
  </div>

</template>


<script setup lang="ts">

import {useProduct} from "@/features/products/composables/products";

import {onMounted} from "vue"
const {  fetchAllProduct, productlist} = useProduct()

onMounted(async() => {
  await fetchAllProduct()
})
// const products = [
//   {
//     product_id:1,
//     name:"Cake & Milk",
//     count:26,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-13.png'
//   },
//   {
//     product_id:2,
//     name:"Organic Kiwi",
//     count:6,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-12.png'
//   },
//   {
//     product_id:3,
//     name:"Peach",
//     count:11,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-11.png'
//   },
//   {
//     product_id:4,
//     name:"Read Apple",
//     count:26,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-9.png'
//   },
//   {
//     product_id:5,
//     name:"Snack",
//     count:13,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-3.png'
//   },
//   {
//     product_id:6,
//     name:"Vegetables",
//     count:17,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-1.png'
//   },
//   {
//     product_id:7,
//     name:"Strawberry",
//     count:17,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-2.png'
//   },
//   {
//     product_id:8,
//     name:"Black plum",
//     count:21,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-4.png'
//   },
//   {
//     product_id:9,
//     name:"Custard Apple",
//     count:29,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-5.png'
//   },
//   {
//     product_id:10,
//     name:"Headphone",
//     count:31,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-15.png'
//   },
//   {
//     product_id:11,
//     name:"Grapes",
//     count:9,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-6.png'
//   },
//   {
//     product_id:12,
//     name:"Orange",
//     count:18,
//     img:'https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/cat-7.png'
//   }
// ]

  
</script>

<style scoped>
</style>