import { useAdminStore } from '@/features/admin/store/index';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import { deleteAdmin } from '@/api/admin';
import { onMounted } from 'vue';

export const useAdmin = () => {
  const UpdateAdmin = ref(false);
  const editingItemId = ref(null);
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const pagination = reactive({
    page: 1,
    pageSize: 10,
    skip: 0
  });

  

  const { loading, self_admin, showAdd, showIcon, admins, singleAdmin, meta } = storeToRefs(store);
  const { signup, getAdmins,fetchOneAdmin, fetchsingleAdmin, fetchUpdateAdmin, removeAdmin, fetchYourselfAdmin } = useAdminStore();

   async function onPageSizeChange(pageSize:number) {
    pagination.pageSize = pageSize;
    pagination.skip = 0;
    await getAdmins(pagination);
  }

  async function onPageChange(newPage:number) {
    pagination.page = newPage;
    pagination.skip = pagination.pageSize * (newPage - 1); 
    await getAdmins(pagination);
  }

  function showPage() {
    showIcon.value = !showIcon.value;
    showAdd.value = !showAdd.value;
  }

  function onShowUpdateAdmin(item: any) {
    UpdateAdmin.value = true;
    editingItemId.value = item.id;
  }


 
  onMounted(async () => {
    await getAdmins(pagination);
  });

  onMounted(async() => {
    await fetchYourselfAdmin()
    
  })
  

  return {
    onPageSizeChange,
    onPageChange,
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
    pagination,
    meta,
  };
};