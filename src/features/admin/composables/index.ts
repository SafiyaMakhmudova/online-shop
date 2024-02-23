import { useAdminStore } from '@/features/admin/store/index';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import { deleteAdmin } from '@/api/admin';
import { onMounted } from 'vue';

export const useAdmin = () => {
  const UpdateAdmin = ref(false);
  const editingItemId = ref(null);
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, self_admin, showAdd, showIcon, admins, singleAdmin } = storeToRefs(store);
  const { signup, getAdmins,fetchOneAdmin, fetchsingleAdmin, fetchUpdateAdmin, removeAdmin, fetchYourselfAdmin } = useAdminStore();

  function showPage() {
    showIcon.value = !showIcon.value;
    showAdd.value = !showAdd.value;
  }

  function onShowUpdateAdmin(item: any) {
    UpdateAdmin.value = true;
    editingItemId.value = item.id;
  }

 
  onMounted(async() => {
    await getAdmins()
    
  })

  onMounted(async() => {
    await fetchYourselfAdmin()
    
  })
  

  return {
    fetchsingleAdmin,
    fetchOneAdmin,
    singleAdmin,
    showIcon,
    showAdd,
    deleteAdmin,
    showPage,
    loading,
    self_admin,
    signup,
    router,
    route,
    admins,
    fetchUpdateAdmin,
    onShowUpdateAdmin,
    removeAdmin,
  };
};