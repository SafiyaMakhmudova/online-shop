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
    <div class="mt-6 flex mx-auto justify-center mb-10">
        <n-pagination
          v-model:page="pagination.page"
          v-model:page-size="pagination.pageSize"
          :page-count="meta.total ? Math.ceil(meta.total / pagination.pageSize) : 1"
          size="large"
          show-quick-jumper
          show-size-picker
          :page-sizes="perPageSetting"
          :disabled="loading"
          @update:page-size="onPageSizeChange"
          @update-page="onPageChange"
        />
      </div>
    <div v-if="adminStore.admin.length">
      <oneAdmin />
 
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { NPagination } from 'naive-ui';

import addAdmin from '@/features/admin/pages/addAdmin.vue';
import getAdmins from '@/features/admin/pages/getAdmins.vue';
import { errorToast } from '@/utils/toast';
import { useAdminStore } from '@/features/admin/store/index';
import oneAdmin from '@/features/admin/pages/oneAdmin.vue';

import { useAdmin } from '@/features/admin/composables';
const {
  showIcon,
  showPage,
  fetchOneAdmin,
  onPageChange,
  onPageSizeChange,
  loading,
  pagination,
  meta
} = useAdmin();

let nameInputValue: { name: string } = reactive({
  name: ''
});

const perPageSetting = [
  {
    label: '10 / page',
    value: 10
  },
  {
    label: '20 / page',
    value: 20
  },
  {
    label: '50 / page',
    value: 50
  },
  {
    label: '100 / page',
    value: 100
  }
];

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
