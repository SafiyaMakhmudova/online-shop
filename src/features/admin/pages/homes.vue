<template>
    <main class="px-7 pt-10  mx-7 my-8 rounded-lg pb-28  border-gray shadow-2xl  ">
        <div v-if="self_admin == null">
            <Loading />
        </div>
        <div class="flex">
            <div class="mr-10  w-[10%] ">
                <i class='bx bxs-user-circle text-9xl text-blue-950 float-right'></i>
            </div>
            <div class="px-7 gap-4 grid grid-cols-2  ">
                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.firstName') }}</label>
                    <input type="text" v-model="self_admin.first_name"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">

                </div>
                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.lastName') }}</label>
                    <input type="text" v-model="self_admin.last_name"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">

                    <br />
                </div>

                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.email') }}</label>
                    <input type="email" v-model="self_admin.email"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">

                </div>
                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.address') }}</label>
                    <input type="text" v-model="self_admin.address"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">
                </div>
                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.phone') }}</label>
                    <input type="phone" v-model="self_admin.phone"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">
                </div>
                <div>
                    <label for="" class="text-xl text-gray font-semibold block">{{ t('adminAccount.password') }}</label>
                    <input type="password" v-model="self_admin.password"
                        class="border-2  mb-4 px-3 py-2 rounded-lg text-gray text-2xl ">
                </div>
            </div>
        </div>

        <button class="border-2 rounded-lg text-xl px-3 py-2 hover:bg-primary  float-right text-white bg-orange  ">{{ t('account.btn') }}</button>
    </main>
</template>

<script setup lang="ts">

import { useAdmin } from '@/features/admin/composables/index'
import Loading from '@/components/loading.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { self_admin  } = useAdmin()

</script>
<style scoped></style>