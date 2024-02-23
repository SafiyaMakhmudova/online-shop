<template>
  <div  v-if="showAdd"
    class="mt-7 items-center text-center border-2 mb-10 scroll-m-1 border-orange shadow-lg shadow-indigo-500/40 rounded-md mx-auto w-[50%]"
  >
    <div>
      <i
        class="bx bxs-x-square text-3xl text-red-700 float-right"
      @click="showPage"
      ></i>
    </div>
    <div class="pt-4">
      <span class="text-2xl text-orange">Add Admin</span>
      <div class="px-7 text-xl pt-5">
        <baseInput
          type="text"
          label="First name"
          placeholder="First name"
          minlength="4"
          v-model="admin.first_name"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="text"
          label="Last name"
          placeholder="Last name"
          minlength="4"
          v-model="admin.last_name"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="text"
          label="address"
          placeholder="Address"
          minlength="4"
          v-model="admin.address"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="password"
          label="password"
          placeholder="Password"
          minlength="4"
          v-model="admin.password"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="password"
          label="confirim password"
          placeholder="Confirim password"
          minlength="4"
          v-model="admin.confirim_password"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="email"
          label="Email"
          placeholder="Email"
          minlength="7"
          v-model="admin.email"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
        <baseInput
          type="phone"
          label="Phone"
          placeholder="Phone number"
          minlength="11"
          v-model="admin.phone"
          class="mb-5 p-2 border-green w-full rounded-lg border-2"
        />
      </div>

      <baseButton
        class="mb-5 p-2 mx-5 rounded-lg bg-orange hover:bg-yellow-600 w-full text-white"
        @click="Submit"
        >
        {{ loading ? 'Loading...' : 'Add' }} </baseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import baseInput from '@/components/base/base-input.vue';
import baseButton from '@/components/base/base-button.vue';
import { adminObj } from '@/modules/interfaces';
import { useAdmin } from '@/features/admin/composables/index.ts';
import { warningToast } from '@/utils/toast';
const { loading, signup, showAdd, showPage } = useAdmin();


const admin = ref<adminObj>({
  first_name: '',
  last_name: '',
  address: '',
  password: '',
  confirim_password: '',
  email: '',
  phone: ''
});

async function Submit() {
  if (
    !admin.value.first_name &&
    !admin.value.last_name &&
    !admin.value.confirim_password &&
    !admin.value.address &&
    !admin.value.email &&
    !admin.value.password &&
    !admin.value.phone 
  ) {
    warningToast("Will the blanks")
    return 
  }
    await signup(admin.value)

    admin.value.first_name = ''
    admin.value.last_name = ''
    admin.value.confirim_password = ''
    admin.value.address = ''
    admin.value.email = ''
    admin.value.password = ''
    admin.value.phone = ''

    
}
</script>

<style scoped></style>
