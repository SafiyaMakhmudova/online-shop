<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <button
      @click="backList"
      class="p-2 rounded-lg bg-orange mb-10 m-5 text-white w-[60px] hover:bg-[#3BB77E] hover:text-black"
    >
      Back
    </button>
    <table class="w-full text-center mx-4">
      <tr class="border-y-[1px]">
        <th class="py-2 text-[18px]">ID</th>
        <th class="text-[18px]">First name</th>
        <th class="text-[18px]">Last name</th>
        <th class="text-[18px]">Email</th>
        <th class="text-[18px]">Address</th>
        <th class="text-[18px]">Phone</th>
        <th class="text-[18px]">Status</th>
        <th class="text-[18px]">Super admin</th>
      </tr>
      <tr>
        <td class="py-2 text-[15px]">{{ singleAdmin?.id }}</td>
        <td class="text-[15px]">{{ singleAdmin?.first_name }}</td>
        <td class="text-[15px]">{{ singleAdmin?.last_name }}</td>
        <td class="text-[15px]">{{ singleAdmin?.email }}</td>
        <td class="text-[15px]">{{ singleAdmin?.address }}</td>
        <td class="text-[15px]">{{ singleAdmin?.phone }}</td>
        <td class="text-[15px]">
          <input
            type="checkbox"
            v-model="singleAdmin.is_active"
          />
        </td>
        <td class="text-[15px]">
          <input
            type="checkbox"
            v-model="singleAdmin.is_superAdmin"
          />
        </td>

        <button
          @click="edited"
          class=""
        >
          <i class="bx bx-edit-alt bx-md text-primary"></i>
        </button>
        <button
          @click="open"
          class="mt-10"
        >
          <i class="bx bx-trash bx-md text-red-700"></i>
        </button>
    
      </tr>
    </table>
    <div
          v-if="dialog"
          class="text-center fixed z-[999]"
        >
        <div class="fixed top-[50%] left-[50%] z-[1000] bg-zinc-300 border-2 rounded-sm ">
          
          <h2 class="text-xl px-5 py-3">Are you sure?</h2>
          <div class="flex justify-center text-lg gap-10 px-5 pb-4">
            <button @click="remove">Yes</button>
            <button @click="open">No</button>
          </div>
        </div>
     </div>
    
     <div
      v-show="showUpdate"
      class="absolute bg-primary p-5 w-[50%] ml-[10%] mr-[10%] mt-[10%] top-14 rounded-xl"
    >
      <div class="flex justify-between">
        <p class="text-lg w-[40%] flex items-center">
          First Name :
          <input
            class="p-1 outline-none rounded-lg ml-2 mt-2 w-[50%]"
            v-model="singleAdmin.first_name"
            type="text"
            name="name"
            id=""
          />
        </p>
        <i
          @click="canceled"
          class="bx bx-x bx-black bx-lg hover:bg-red-600 rounded-lg"
        ></i>
      </div>
      <p class="text-lg w-[40%] flex items-center">
        Last Name :
        <input
          class="p-1 w-[50%] outline-none rounded-lg ml-4 mt-2"
          v-model="singleAdmin.last_name"
          type="text"
          name="description"
          id=""
        />
      </p>
      <p class="text-lg w-[40%] flex items-center">
        Address :
        <input
          class="p-1 w-[50%] outline-none rounded-lg ml-8 mt-2"
          v-model="singleAdmin.address"
          type="text"
          name="description"
          id=""
        />
      </p>
      <p class="text-lg w-[40%] flex items-center">
        Password :
        <input
          class="p-1 w-[50%] outline-none rounded-lg ml-5 mt-2"
          v-model="singleAdmin.password"
          type="text"
          name="description"
          id=""
          required="true"
        />
      </p>
      <p class="text-lg w-[40%] flex items-center">
        Super Admin :
        <input
          class="p-1 w-[10%] outline-none rounded-lg"
          v-model="singleAdmin.is_superAdmin"
          type="checkbox"
          required="true"
        />
      </p>
      <button
        @click="saved"
        class="p-2 mt-10 bg-orange w-[100px] rounded-lg hover:bg-blue-600 hover:text-white"
      >
        Saved
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from '@/features/admin/composables/index.ts';
import { onMounted, ref, reactive } from 'vue';
import Loading from '@/components/loading.vue';
import { adminRoute } from '@/constants/routes/admin';
import { warningToast } from '../../../utils/toast';

const { singleAdmin, loading, route, fetchsingleAdmin, router, fetchUpdateAdmin, removeAdmin } =
  useAdmin();

const showUpdate = ref<boolean>(false);
const dialog = ref<boolean>(false);

onMounted(async () => {
  const id = String(route.params.id);
  await fetchsingleAdmin(id);
});

const backList = async () => {
  router.push({ name: adminRoute.RT_ADMINS });
};

async function edited() {
  showUpdate.value = true;
}

async function canceled() {
  showUpdate.value = false;
}

async function saved() {
  const updateAdmin = reactive({
    id: +route.params.id,
    first_name: singleAdmin.value?.first_name,
    last_name: singleAdmin.value?.last_name,
    password: singleAdmin.value?.password,
    address: singleAdmin.value?.address,
    confirim_password: singleAdmin.value?.password,
    email: singleAdmin.value?.email,
    phone: singleAdmin.value?.phone,
    is_superAdmin: Boolean(singleAdmin.value?.is_superAdmin ?? false),
    is_active: singleAdmin.value?.is_active
  });

  if (
    !updateAdmin.address &&
    !updateAdmin.first_name &&
    updateAdmin.last_name &&
    updateAdmin.password
  ) {
    warningToast('Will the blank');
    return;
  }

  await fetchUpdateAdmin(updateAdmin);
  showUpdate.value = false;
}

async function open() {
  dialog.value = !dialog.value;
}

async function remove() {
  const id = String(route.params.id);
  await removeAdmin(id);
  dialog.value = !dialog.value;
}
</script>
<style scoped></style>
