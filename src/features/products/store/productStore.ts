import { adminRoute } from '@/constants/routes/admin';
import {
  addProductApi,
  findAllProduct,
  findOneProduct,
  finddeleteProduct,
  findupdateProduct,
  SearchProduct,
} from '@/api/product';
import { errorToast, successToast } from '@/utils/toast';
import { addProductObj, updateProduct, productObj } from '@/features/products/modules/product';
import { searchProductObj } from '@/modules/interfaces';

import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';

export const useProductstore = defineStore('product', {
  state: (): {
    productlist: productObj[],
    addedProoduct: updateProduct[],
    singleProduct: any;
    searchProductName: searchProductObj[];
    loading: boolean;
    showPageD:boolean;
  } => {
    return {
      productlist: [],
      singleProduct: {},
      searchProductName: [],
      loading: false,
      addedProoduct: [],
      showPageD:false,
    };
  },
  actions: {
    async addProduct(newProduct: addProductObj) {
      this.loading = true;
      try {
        const res = await addProductApi(newProduct);

        if (res.status !== 201) {
          errorToast('Error ocured in creating product. Retry');
          return;
        }

        this.addedProoduct = res.data;
        
        this.loading = false;
        successToast('Product created successfully');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast('Fields');
            return;
          }
          errorToast(error.message);
        }
      }
    },

    async fetchAllProduct() {
      this.loading = true;
      try {
        const res = await findAllProduct();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.productlist = res?.data;
        
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
        }
      }
    },

    async fetchOneProduct(id: string) {
      this.loading = true;
      try {
        const res = await findOneProduct(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleProduct = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async SearchProductByName(searchProduct: searchProductObj): Promise<void> {
      this.loading = true;
      try {
        const res = await SearchProduct(searchProduct);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.productlist = res?.data;
        
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async updateProduct(updateProduct: updateProduct) {
      this.loading = true;
      try {
        const res = await findupdateProduct(updateProduct);
        if (res.status !== 200) {
          errorToast('Product update failed');
        }
        this.loading = false;
        successToast('Product updated successfully');
        router.push({ name: adminRoute.RT_PRODUCTS });
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async deleteProduct(id: string) {
      this.loading = true;
      try {
        const res = await finddeleteProduct(id);
        if (res.status !== 200) {
          errorToast('Product not deleted');
          return;
        }
        this.loading = false;
        successToast('Product deleted successfully');
        await findAllProduct();
        router.push({ name: adminRoute.RT_PRODUCTS });
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    }
  }
});
