import { useOrderstore } from '../store/order';
import { storeToRefs } from 'pinia';
import { onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
// import { order } from '../modules/order';

export const useOrder = () => {
  const store = useOrderstore();
  const router = useRouter();
  const route = useRoute();

  const { loading, orderlist  } = storeToRefs(store);
  const { fetchAllOrder } = useOrderstore();

  onMounted(async () => {
    await fetchAllOrder();
  });

  const allOrder = async () => {
    try {
      await fetchAllOrder();
    } catch (error) {
    }
  };

  return {
    allOrder,
    orderlist,
    loading,
    router,
    route
  };
};
