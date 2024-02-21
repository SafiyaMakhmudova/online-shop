import {
  addCategoryApi,
  findAllCategory,
  findOneCategory,
  findupdateCategory,
  finddeleteCategory
} from '@/api/category';
import { errorToast, successToast } from '@/utils/toast';
import { category, updateCategory } from '@/features/products/modules/category';

import axios from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';
import { adminRoute } from '@/constants/routes/admin';

export const useCategorystore = defineStore('category', {
  state: (): {
    categorylist: category[];
    loading: boolean;
    singleCategory: any;
    options: Array<{ label: string; key:number | string | undefined  }>;
  } => {
    return {
      options: [],
      categorylist: [],
      singleCategory: {},
      loading: false
    };
  },
  actions: {
    async addCategory(newCategory: any) {
      this.loading = true;
      try {
        const res = await addCategoryApi(newCategory);
        if (res.status !== 201) {
          errorToast('Error ocured in creating Category. Retry');
          return;
        }
        this.loading = false;
        successToast('Category created successfully');
        router.push({ name: adminRoute.RT_CATEGORY });
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
    async fetchAllCategory() {
      this.loading = true;
      try {
        const res = await findAllCategory();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.categorylist = res?.data;

        this.options = this.categorylist.map((category) => ({
          label: category.name,
          key: category.id
        }));
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
        }
      }
    },
    async fetchOneCategory(id: string) {
      this.loading = true;
      try {
        const res = await findOneCategory(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleCategory = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async updateCategory(updateCategory: updateCategory) {
      this.loading = true;
      try {
        const res = await findupdateCategory(updateCategory);
        if (res.status !== 200) {
          errorToast('Category update failed');
        }
        this.loading = false;
        successToast('Category updated successfully');
        router.push({ name: adminRoute.RT_CATEGORY });
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async deleteCategory(id: string) {
      this.loading = true;
      try {
        const res = await finddeleteCategory(id);

        if (res.status !== 200) {
          errorToast('Category not deleted');
          return;
        }
        this.loading = false;
        successToast('Category deleted successfully');
        router.push({ name: adminRoute.RT_CATEGORY });
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    }
  }
});
