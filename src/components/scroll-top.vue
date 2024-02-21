<template>
  <button
    @click="scrollTop"
    v-if="showButton"
    class="bottom-5 right-5 p-3 cursor-pointer fixed hover:text-gray-900"
  >
    <i class="bx bx-up-arrow-circle text-4xl text-gray-600"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 100; // Adjust the scroll threshold as needed
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
