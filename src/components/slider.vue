<template>
  <n-carousel 
    effect="custom"
    :transition-props="{ name: 'creative' }"
    show-arrow
    style="width: 100%; height: 460px;"
  >
    <img
      class="carousel-img"
      src="../assets/images/sliders/fresh_fruit.avif"
    />
    <img
      class="carousel-img"
      src="../assets/images/sliders/organic_fruit.jpg"
    />
  </n-carousel>
</template>

<script setup lang="ts">
import { NCarousel } from 'naive-ui';
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 740px;
  object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>
