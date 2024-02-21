<template>
    <div class="p-10  flex justify-center  items-center">
        <h3 class="text-3xl ">{{ t('empty.emptyComp') }}</h3>
        <i class='text-3xl text-yellow-500 bx bx-sad'></i>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<style scoped>

</style>