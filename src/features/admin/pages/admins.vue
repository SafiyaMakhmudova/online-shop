<template>
  <div>
    <div class="w-full flex justify-between px-3 items-center">
      <div class="search">
        <div class="flex justify-between items-center w-[300px] border rounded-[30px] py-2 px-2">
          <input
            class="outline-none border-x-white px-2 text-[16px]"
            type="text"
            placeholder="Search by name..."
            v-model="nameInputValue.name"
          />
          <i
            class="bx bx-search-alt-2 text-[25px]"
            @click="searchAdmin"
          ></i>
        </div>
      </div>
      <div
        class="p-7"
        v-show="showIcon"
      >
        <i
          class="bx bxs-user-plus text-4xl text-orange"
          @click="showPage"
        ></i>
      </div>
      <addAdmin />
    </div>
    <getAdmins />
    <div v-if="adminStore.admin.length">
      <oneAdmin/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, } from 'vue';
import addAdmin from '@/features/admin/pages/addAdmin.vue';
import getAdmins from '@/features/admin/pages/getAdmins.vue';
import { errorToast } from '@/utils/toast';
import { useAdminStore } from '@/features/admin/store/index';
import oneAdmin from '@/features/admin/pages/oneAdmin.vue';

import { useAdmin } from '@/features/admin/composables';
const { showIcon, showPage,fetchOneAdmin  } = useAdmin();

let nameInputValue: {name:string} = reactive({
  name: ''
});

const adminStore = useAdminStore();

async function searchAdmin() {
  if (!nameInputValue) {
    errorToast('Name field is empty');
  }

  await fetchOneAdmin(nameInputValue);
  nameInputValue.name = '';
}
</script>

<style scoped></style>
