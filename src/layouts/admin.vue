<template>
  <div class="!h-screen flex">
    <div class="">
      <sidebar
        :permanent="permanent"
        :routes="adminRoutes"
      />
    
    </div>
    <div class="w-full overflow-y-scroll h-screen">
      <appbar @toggle-sidebar="toggleSidebar" class='h-[15%]' />
      <main class="">
        <container>
          <slot />
        </container>
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { adminRoute } from '@/constants/routes/admin';
import Sidebar from '@/components/partials/sidebar.vue';
import Appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

const adminRoutes = ref([
  {
    text: adminRoute.MT_ADMINS,
    name: adminRoute.RT_ADMINS
  },
  {
    text: adminRoute.MT_DAHBOARD,
    name: adminRoute.RT_DASHBOARD
  },
  {
    text: adminRoute.MT_CATEGORY,
    name: adminRoute.RT_CATEGORY
  },
  {
    text: adminRoute.MT_PRODUCTS,
    name: adminRoute.RT_PRODUCTS
  },
  {
    text: adminRoute.MT_ORDER,
    name: adminRoute.RT_ORDER
  }
]);

const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
</script>
