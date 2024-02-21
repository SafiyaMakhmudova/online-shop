<template>
  <nav class="bg-white border-gray-200 py-2.5 shadow-md dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <a
        href="#"
        class="flex items-center"
      >
        <img
          src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/logo.png"
          class="h-6 mr-3 sm:h-9"
          alt="Landwind Logo"
        />
      </a>
      <div class="flex lg:hidden items-center lg:order-2">
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="true"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full gap-3 lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <div class="lg:hidden w-[90%] rounded flex items-center justify-between bg-slate-200">
          <input
            class="bg-slate-200 outline-none text-[14px] text-[#253D4E] py-3 px-3"
            type="text"
            placeholder="Search for product..."
          />
          <i class="bx bx-search-alt-2 text-xl text-slate-400 cursor-pointer px-2"></i>
        </div>

        <div class="lg:hidden btns w-[90%] mt-3 flex justify-between gap-2">
          <button class="menu w-[48%] py-2 rounded bg-[#FDE1BD] text-[#43B981] font-semibold">
            Menu
          </button>
          <button class="menu w-[48%] py-2 rounded bg-slate-200 text-slate-400 font-semibold">
            Category
          </button>
        </div>

        <div
          class="lg:px-4 mt-3"
          v-for="item in myArray"
        >
          <dropDown
            :options="item.value"
            class="font-bold"
            >{{ item.key }}</dropDown
          >
        </div>

        <div class="lg:hidden join mt-4 w-[90%]">
          <div class="px-3 border rounded py-3">
            <div class="tel flex items-center gap-1">
              <img
                class="w-[20px] color-[#43B981]"
                src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/hot.png"
                alt=""
              />
              <p class="mt-3">+998 90 001 01 01</p>
            </div>
            <div class="tel flex items-center gap-1">
              <i class="bx bx-envelope text-[20px]"></i>
              <p class="mt-2">sendemail@gmail.com</p>
            </div>
            <div class="btns">
              <button
                class="w-full text-[15px] text-white rounded font-semibold bg-[#FDC040] py-2 px-10"
              >
                Sign Up
              </button>
              <button
                class="w-full mt-3 text-[15px] text-white rounded font-semibold bg-[#3BB77E] py-2 px-10"
              >
                Log In
              </button>
            </div>
          </div>

          <div class="socialMedias mt-10 flex justify-start items-center">
            <div
              class="facebook flex justify-around items-center w-[35px] h-[35px] bg-[#3BB77E] rounded-full scale-90 duration-300 hover:translate-y-[-6px]"
            >
              <box-icon
                class="w-[20px]"
                type="logo"
                name="facebook"
                color="#ffffff"
              ></box-icon>
            </div>

            <div
              class="twitter flex justify-around items-center w-[35px] h-[35px] bg-[#3BB77E] rounded-full scale-90 duration-300 hover:translate-y-[-6px]"
            >
              <box-icon
                class="w-[20px]"
                type="logo"
                name="twitter"
                color="#ffffff"
              ></box-icon>
            </div>

            <div
              class="skype flex justify-around items-center w-[35px] h-[35px] bg-[#3BB77E] rounded-full scale-90 duration-300 hover:translate-y-[-6px]"
            >
              <box-icon
                class="w-[20px]"
                name="skype"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </div>

            <div
              class="instagram flex justify-around items-center w-[35px] h-[35px] bg-[#3BB77E] rounded-full scale-90 duration-300 hover:translate-y-[-6px]"
            >
              <box-icon
                class="w-[20px]"
                name="youtube"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </div>

            <div
              class="instagram flex justify-around items-center w-[35px] h-[35px] bg-[#3BB77E] rounded-full scale-90 duration-300 hover:translate-y-[-6px]"
            >
              <box-icon
                class="w-[20px]"
                name="instagram-alt"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </div>
          </div>

          <div class="madeDate mt-10">
            <p class="text-[13px] text-[#445d70] font-semibold">
              Copyright 2023 ©, Nest - WordPress Ecommerce Template. All rights reserved
            </p>
          </div>
        </div>

        <div class="hidden ml-5 lg:flex items-center">
          <img
            class="w-8"
            src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/hot.png"
            alt=""
          />
          <div class="ml-4">
            <a
              class="block text-primary text-xl font-semibold hover:text-red-500"
              href="tel:1900888123"
              >1900888123</a
            >
            <span class="text-gray">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import dropDown from '../components/drop-down.vue';

const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 100; // Adjust the scroll threshold as needed
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

let myArray = ref([
  { key: 'About Us', value: [] },
  {
    key: 'Venders',
    value: [
      {
        label: 'Dashboard',
        key: 'Dashboard'
      },
      {
        label: 'Store listing',
        key: 'Store listing'
      },
      {
        label: 'Store Details',
        key: 'Store Details'
      },
      {
        label: 'My Orders',
        key: 'My Orders'
      }
    ]
  },
  {
    key: 'Pages',
    value: [
      {
        label: 'About',
        key: 'About'
      },
      {
        label: 'Contact',
        key: 'Contact'
      },
      {
        label: 'My account',
        key: 'My account'
      },
      {
        label: 'Checkout',
        key: 'Checkout'
      },
      {
        label: 'Shop Compare',
        key: 'Shop Compare'
      },
      {
        label: 'Shop Wishlist',
        key: 'Shop Wishlist'
      },
      {
        label: 'Cart',
        key: 'Cart'
      },
      {
        label: 'My orders',
        key: 'My orders'
      }
    ]
  },
  { key: 'Contact', value: [] },
  { key: 'Wishlist', value: [] }
]);


</script>

<style scoped></style>
