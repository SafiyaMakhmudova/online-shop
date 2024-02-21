import { addMediaApi } from '@/api/media';
import { errorToast, successToast } from '@/utils/toast';
import { mediaObj } from '@/modules/interfaces';

import axios from 'axios';
import { defineStore } from 'pinia';

export const useMediaStore = defineStore('media', {
  state: ():{
    mediaList:mediaObj[];
    loading:boolean;
  } => {
    return {
      mediaList: [],
      loading: false,
    };
  },
  actions: {
    async addMedia(newProduct: mediaObj) {
      this.loading = true;
      try {
        const res = await addMediaApi(newProduct);

        if (res.status !== 201) {
          errorToast('Error ocured in creating product. Retry');
          return;
        }
        
        this.loading = false;
        successToast('Media created successfully');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast(error.message);
            return;
          }
          errorToast(error.message);
        }
      }
    },

  }
});
