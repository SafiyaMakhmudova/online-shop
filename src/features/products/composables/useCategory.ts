import { onMounted } from 'vue';
import { useCategorystore } from '@/features/products/store/categoryStore';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

export const useCategory = () => {
  const store = useCategorystore();
  const router = useRouter();
  const route = useRoute();

  const { loading, options, singleCategory, categorylist } = storeToRefs(store);
  const { addCategory, fetchAllCategory, fetchOneCategory, updateCategory, deleteCategory } =
    useCategorystore();

  
onMounted(async() => {
  await fetchAllCategory()
})

  return {
    addCategory,
    fetchAllCategory,
    fetchOneCategory,
    updateCategory,
    deleteCategory,
    options,
    loading,
    singleCategory,
    categorylist,
    router,
    route,
  };
};
