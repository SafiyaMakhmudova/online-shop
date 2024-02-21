<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else-if="admins.length != 0">
    <table class="w-full text-center">
      <tr class="border-y-[1px]">
        <th class="py-2 text-[18px]">ID</th>
        <th class="text-[18px]">First name</th>
        <th class="text-[18px]">Last name</th>
        <th class="text-[18px]">Email</th>
        <th class="text-[18px]">Address</th>
        <th class="text-[18px]">Phone</th>
        <th class="text-[18px]">Status</th>
      </tr>
      <tr
        class="border-y-[1px]"
        v-for="(admin, index) in admins"
        :key="index"
      >
        <td class="py-2 text-[15px]">{{ admin.id }}</td>
        <td class="text-[15px]">{{ admin.first_name }}</td>
        <td class="text-[15px]">{{ admin.last_name }}</td>
        <td class="text-[15px]">{{ admin.email }}</td>
        <td class="text-[15px]">{{ admin.address }}</td>
        <td class="text-[15px]">{{ admin.phone }}</td>
        <td class="text-[15px]"><input type="checkbox" v-model="admin.is_active"></td>

      </tr>
    </table>
  </div>
  <div v-else>
    <empty />
  </div>
</template>

<script setup lang="ts">
  import { useAdmin } from '@/features/admin/composables/index.ts';
  import Loading from '@/components/loading.vue';
  import empty from '@/components/empty.vue';
  import {onMounted} from "vue"
  const { admins, loading, allAdmins, } = useAdmin();;

  onMounted(async() => {
    await allAdmins()
    
  })

</script>

<style scoped></style>
