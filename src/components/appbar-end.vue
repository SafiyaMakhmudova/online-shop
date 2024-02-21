<template>
  <aside class="lg:hidden bg-slate-100 px-3">
    <div class="w-[100%] py-[10px] flex justify-between">
      <div class="w-full flex border-green rounded-md border-[2px] gap-3 items-center p-2 bg-white">
        <div class="flex gap-1 md:gap-4 justify-between items-center">
          <p class="text-[12px] pt-2 md:text-[15px] font-bold">All Category</p>
          <i class="bx bx-chevron-down  text-[25px] text-slate-400 cursor-pointer"></i>
          <span class="text-slate-400 text-[20px]">|</span>
        </div>
        <div class="w-[50%] md:w-[70%] flex justify-between">
          <input
            class="w-[50%] md:w-full outline-none text-[13px]"
            type="text"
            placeholder="Search for product..."
          />
          <i class="bx bx-search-alt-2 text-xl text-slate-400 cursor-pointer"></i>
        </div>
      </div>

    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>