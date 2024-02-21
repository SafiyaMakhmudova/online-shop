import { useProductstore } from '@/features/products/store/productStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useProduct = () => {
  const store = useProductstore();
  const router = useRouter();
  const route = useRoute();

  const { loading, singleProduct, productlist, addedProoduct, showPageD, } = storeToRefs(store);
  const { addProduct, fetchAllProduct, updateProduct, fetchOneProduct, deleteProduct, SearchProductByName } =
    useProductstore();


 
  onMounted(async () => {
    await fetchAllProduct();
  });
  
  return {
    addedProoduct,
    fetchAllProduct,
    showPageD,
    loading,
    singleProduct,
    productlist,
    router,
    route,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchOneProduct,
    SearchProductByName,
  };
};
