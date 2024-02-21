<template>
  <main>
    <appbar />
    <navbar />
    <slot />
    <emailSubscribe />
    <endPage />

    <scrollTop />
  </main>
</template>
  
<script setup lang="ts">
import appbar from '@/components/appbar.vue';
import navbar from '@/components/navbar.vue';
import endPage from '@/components/end-page.vue';
import scrollTop from '@/components/scroll-top.vue';
import emailSubscribe from '@/features/products/components/email-subscribe.vue';
</script>
  
