<template>
   <nav class="app-bar w-[100%] " :class="{'appBar':!permanent}">
    <button @click="onSidebarToggle" class="toggle-button">
      <i class="bx bx-menu px-7  "></i>
    </button>
    <langSwitcher/>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import langSwitcher from '@/components/langSwitcher.vue';

const permanent = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'toggleSidebar', permanent: boolean): void;
}>();

function onSidebarToggle(): void {
  permanent.value = !permanent.value;
  emit('toggleSidebar', permanent.value);
}
</script>

<style scoped>

.app-bar {
  background-color:#3BB77E;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>