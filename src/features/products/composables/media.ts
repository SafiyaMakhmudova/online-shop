import { useMediaStore } from '@/features/products/store/media';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

export const useMedia = () => {
  const store = useMediaStore();
  const router = useRouter();
  const route = useRoute();
 

  const { loading, mediaList } = storeToRefs(store);
  const { addMedia } = useMediaStore();

  
  return {
    loading,
    addMedia,
    mediaList,
    router,
    route
  };
};
