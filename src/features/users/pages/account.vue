<template>
    <div class="border-2 border-gray  rounded-md my-10 mx-[20%] px-5 pb-14  pt-4 ">
        <div class=" text-gray ">
            <b class="block mb-7 text-lg text-black ">{{ t('account.info') }}</b>
            <div class="flex gap-10">
            
            <div>
                <label for="" class="block text-lg text-black  ">{{ t('account.fullName') }}</label>
                <input type="text"  class="rounded-md p-2 border-gray border-2" placeholder="Ism">
            </div>
            <div>
                <label for="" class="block text-lg text-black ">{{ t('account.phone') }}</label>
                <input type="phone"  class="rounded-lg p-2 border-gray border-2" placeholder="Telefon raqam">
            
            </div>
            </div>
        </div>
        <button class=" rounded-xl text-white float-right px-3 py-2 bg-orange hover:bg-primary ">{{ t('account.btn') }}</button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<style scoped>

</style>