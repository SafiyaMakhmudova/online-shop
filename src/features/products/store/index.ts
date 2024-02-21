import { defineStore } from 'pinia';
import { Product, ProductStoreState } from '@/features/products/modules/product';

export const useProductStore = defineStore('productCart', {
  state: (): ProductStoreState => ({
    cartData: [],
    length: 0
  }),
  actions: {
    counterPlus(id: string, type: 'plus' | 'minus'): void {
      let index: number | undefined;
      let selectArr: Product | undefined;
      let old: Product[] | null;

      const data = window.localStorage.getItem('myProduct');
      old = data ? JSON.parse(data) : null;

      if (this.cartData.length === 0 && old !== null) {
        this.cartData = [...old];
      }

      this.cartData.forEach((item, i) => {
        if (item.id.toString() === id) {
          selectArr = item;
          index = i;
        }
      });

      if (selectArr && index !== undefined) {
        if (type === 'plus') {
          selectArr.count += 1;
        } else {
          selectArr.count -= 1;
        }

        this.cartData.splice(index, 1, selectArr);
        // this.saveProduct();
      }
    }
  },
  getters: {}
});
