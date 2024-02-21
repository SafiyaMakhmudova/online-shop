import { useAdminStore } from '@/features/admin/store/index';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import { deleteAdmin } from '@/api/admin';
import { adminName } from '../../../modules/interfaces';


export const useAdmin = () => {
  const UpdateAdmin = ref(false);
  const editingItemId = ref(null);
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, self_admin, showAdd, showIcon, admins } = storeToRefs(store);
  const { signup, getAdmins, updateAdmin ,fetchOneAdmin } = useAdminStore();

  function showPage() {
    showIcon.value = !showIcon.value;
    showAdd.value = !showAdd.value;
  }

  function onShowUpdateAdmin(item: any) {
    UpdateAdmin.value = true;
    editingItemId.value = item.id;
  }

  const allAdmins = async () => {
    try {
      await getAdmins();
    } catch (error) {
      console.log(error);
      
    }
  };

  const getOneAdmin = async (name:adminName) =>{
    try {
      await fetchOneAdmin(name)
    } catch (error) {
      console.log(error);
    }
  }

  return {
    showIcon,
    showAdd,
    deleteAdmin,
    showPage,
    loading,
    self_admin,
    signup,
    allAdmins,
    router,
    route,
    admins,
    updateAdmin,
    onShowUpdateAdmin,
    getOneAdmin
  };
};