<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else-if="orderlist.length != 0">
    <table class="w-full text-center">
      <tr class="border-y-[1px]">
        <th class="py-2 text-[18px]">ID</th>
        <th class="text-[18px]">User</th>
        <th class="text-[18px]">Phone</th>
        <th class="text-[18px]">Date</th>
        <th class="text-[18px]">Payment</th>
        <th class="text-[18px]">Status</th>
      </tr>
      <tr
        class="border-y-[1px]"
        v-for="(order, index) in orderlist"
        :key="index"
      >
        <td class="py-2 text-[15px]">{{ order.id }}</td>
        <td class="text-[15px]">{{ order.user_name }}</td>
        <td class="text-[15px]">{{ order.phone }}</td>
        <td class="text-[15px]">{{ order.date }}</td>
        <td class="text-[15px]">{{ order.payment_type }}</td>
        <td class="text-[15px]">{{ order.status }}</td>
      </tr>
    </table>
  </div>
  <div v-else>
    <empty/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useOrder } from '@/features/products/composables/order';

 import Loading from "@/components/loading.vue";

import empty from '@/components/empty.vue';

const { allOrder, orderlist, loading } = useOrder();

onMounted(async () => {
  await allOrder();
});

// let arr = ref([
//   {
//     id: '1',
//     name: 'Apple',
//     client_name: 'Abdusattor',
//     phone: '+998901234567',
//     date: '01-01-2024',
//     payment_type: 'Card',
//     status: 'active'
//   },
//   {
//     id: '1',
//     name: 'Apple',
//     client_name: 'Abdusattor',
//     phone: '+998901234567',
//     date: '01-01-2024',
//     payment_type: 'Card',
//     status: 'active'
//   },
//   {
//     id: '1',
//     name: 'Apple',
//     client_name: 'Abdusattor',
//     phone: '+998901234567',
//     date: '01-01-2024',
//     payment_type: 'Card',
//     status: 'active'
//   },
//   {
//     id: '1',
//     name: 'Apple',
//     client_name: 'Abdusattor',
//     phone: '+998901234567',
//     date: '01-01-2024',
//     payment_type: 'Card',
//     status: 'active'
//   },
//   {
//     id: '1',
//     name: 'Apple',
//     client_name: 'Abdusattor',
//     phone: '+998901234567',
//     date: '01-01-2024',
//     payment_type: 'Card',
//     status: 'active'
//   }
// ]);
</script>

<style scoped></style>
