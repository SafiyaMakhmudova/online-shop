import { findAllOrder } from '@/api/order';
import { errorToast } from '@/utils/toast';
import { order } from '@/features/products/modules/order';

// import axios from 'axios';
import { defineStore } from 'pinia';

export const useOrderstore = defineStore('order', {
  state: ():{
    orderlist:order[];
    loading:boolean;
  } => {
    return {
      orderlist: [],
      loading: false
    };
  },
  actions: {
    async fetchAllOrder() {
      this.loading = true;
      try {
        const res = await findAllOrder();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.orderlist = res?.data;
        
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
        }
      }
    }
  }
});
