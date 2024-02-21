<template>
  <div class="">
    <div
      class="path flex justify-start items-center mt-3 gap-2 border-b-[2px] px-3"
    >
      <a href="# text-[#3BB77E] ">
        <div class="home flex gap-2 text-[#3BB77E]">
          <i class="bx bx-home w-[14px]"></i>
          <p class="font-semibold text-[14px]">Home</p>
          <i class="bx bx-chevron-right w-[12px]"></i>
        </div>
      </a>
      <div class="page flex items-center">
        <p class="font-semibold text-[14px]">Shop Wishlist</p>
      </div>
    </div>
    <div class="wishlist pt-[50px] lg:pt-[100px] pb-3">
      <div class="chose-products" v-for="product in products">
        <div
          class="product w-[90%] mt-2 lg:w-[70%] mx-auto flex justify-between py-2 px-1 lg:py-3 lg:px-3 items-center border hover:bg-[#F4F6FA]"
        >
          <div class="w-[10%] remove-btn cursor-pointer">
            <div
              class="border flex items-center justify-center border-[#3BB77E] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-[50%]"
            >
              <i class="bx bx-x text-2xl rounded-[50%] p-2"></i>
            </div>
          </div>

          <div class="img w-[10%]">
            <img class="w-[70px]" :src="product.img" alt="" />
          </div>

          <div class="product-info w-[50%] leading-2 lg:leading-4">
            <p class="text-[12px] lg:text-[16px] text-[#253D4E] font-bold">
              {{ product.name }}
            </p>
            <div class="price flex gap-2">
              <p
                class="text-[12px] lg:text-[16px] text-[#7E7E7E] font-medium overline"
              >
                {{ product.old_price }}
              </p>
              <p class="text-[12px] lg:text-[16px] text-[#7E7E7E] font-medium">
                {{ product.price }}
              </p>
            </div>
            <p class="text-[12px] lg:text-[16px] text-[#7E7E7E] font-medium">
              {{ product.date }}
            </p>
          </div>

          <div class="add w-[30%]">
            <p class="text-[12px] lg:text-[16px] text-[#7E7E7E] font-medium">
              {{ product.stock }}
            </p>
            <button
              class="flex items-center bg-[#3BB77E] text-[10px] lg:text-[14px] rounded text-white font-bold py-1 px-1 lg:py-2 lg:px-3"
            >
              <i class="bx bx-cart-alt text-white text-[18px] lg:text-2xl"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div class="wwwww mt-[50px]">
        <div
          class="wish-link lg:w-[80%] ml-3 md:ml-[50px] lg:ml-[200px] flex items-center gap-2"
        >
          <p class="text-[8px] lg:text-[15px] text-[#7E7E7E] font-medium">
            Wishlist link:
          </p>
          <div class="link border rounded pt-2">
            <p class="text-[8px] lg:text-[15px] text-[#7E7E7E] font-medium">
              https://themepanthers.com/wp/nest/d3/shop-wishlist/0U1N01
            </p>
          </div>
          <button
            class="bg-[#3BB77E] text-[8px] lg:text-[14px] rounded text-white font-bold py-2 px-3"
          >
            Copy
          </button>
        </div>
      </div>

      <div
        class="w-[90%] mt-10 lg:mt-[100px] mx-auto py-7 px-4 resently-view border rounded border-dotted"
      >
        <h2 class="text-[15px] lg:text-[22px] text-[#253D4E]">
          Recently Viewd Products
        </h2>
        <div
          class="flex justify-start items-center gap-2 lg:gap-5 flex-wrap py-8"
        >
          <div v-for="product in products">
            <div
              class="border text-slate-300 rounded flex w-[300px] gap-3 py-3 px-6"
            >
              <div class="w-[30%] flex justify-center items-center">
                <img class="w-[100%]" :src="product.img" alt="" />
              </div>
              <div class="w-[60%]">
                <div>
                  <h2 class="font-bold text-[16px] text-slate-800">
                    {{ product.name }}
                  </h2>
                </div>
                <div class="text-slate-400 text-sm mb-2">
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <span class="ml-2">0</span>
                </div>
                <div class="flex text-primary font-bold gap-2 items-baseline">
                  <span class="text-[15px]">{{ product.price }}</span>
                  <s class="text-slate-400"
                    >$<s class="text-[13px] text-slate-400">{{
                      product.old_price
                    }}</s></s
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let products = ref([
  {
    name: "Nikky Regular Men Light Blue Jeans",
    old_price: "$150.00",
    price: "$101.00",
    date: "February 4, 2024",
    stock: "409 in stock",
    img: "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/pro-dress-1-8-300x300.jpg",
  },
  {
    name: "Nikky Regular Men Light Blue Jeans",
    old_price: "$150.00",
    price: "$101.00",
    date: "February 4, 2024",
    stock: "409 in stock",
    img: "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/pro-dress-1-8-300x300.jpg",
  },
]);

</script>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
</style>
