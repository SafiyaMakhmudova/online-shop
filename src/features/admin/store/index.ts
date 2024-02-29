import { defineStore } from 'pinia';
import router from '@/router';
import { create, updateByAdmin, apifetchAdmins, apiSearchAdmin, deleteAdmin , getOneAdmin} from '@/api/admin';
import { errorToast, successToast } from '@/utils/toast';
// import router from '@/router/index';
import { adminName, adminObj , admin} from '@/modules/interfaces';
import {pagination} from '@/modules/types';

import { login } from '@/api/auth';
import { adminLogin } from '@/features/admin/modules';
import { adminRoute } from '@/constants/routes/admin';
import { authRoute } from '@/constants/routes/auth';

export const useAdminStore = defineStore('admin', {
  state: (): {
    showIcon: boolean;
    showAdd: boolean;
    loading: boolean;
    self_admin: adminObj;
    admins: adminObj[];
    admin: adminObj[] ;
    singleAdmin:admin;
    meta:{
      total:number
    };

  } => {
    return {
      singleAdmin:{} as admin,
      showIcon: true,
      showAdd: false,
      self_admin: {
        first_name: '',
        last_name: '',
        address: '',
        password: '',
        confirim_password: '',
        email: '',
        phone: ''
      },
      admins: [],
      loading: false,
      admin: [],
      meta:{
        total:0
      }
    };
  },
  actions: {
    async authLogin(payload: adminLogin) {
      try {
        this.loading = true;
        const res = await login(payload);
        if (res?.data.tokens?.access_token) {
          
          this.self_admin = res.data.user;
          if(this.self_admin.is_superAdmin){
              
            this.saveUser(res?.data);
            router.push({ name: adminRoute.RT_DASHBOARD });
          }
        }
      } catch (err:any) {
        errorToast("Unauthorized");
        this.loading = false;
      }
    },

    saveUser(data: any) {
      localStorage.setItem('access_token', data?.tokens.access_token);
      this.self_admin = data?.user;
    },

    clearUser() {
      localStorage.removeItem('access_token');
      this.self_admin = {
        first_name: '',
        last_name: '',
        address: '',
        password: '',
        confirim_password: '',
        email: '',
        phone: ''};
      router.replace({ name: authRoute.RT_ADMIN_LOGIN });
    },

    async signup(payload: adminObj) {
      try {
        this.loading = true;
        
        const res = await create(payload);
        if (res?.data?.status !== 201) {
          return;
        }
        this.loading = false;
        successToast('Successfully added');
        router.push({name:adminRoute.RT_ADMINS})
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    },
    
    async fetchUpdateAdmin(data: adminObj) {
      try {
        const res = await updateByAdmin(data);
        
        if (res.status !== 200) {
          errorToast('Not edited');
          return;
        }
        successToast('Admin succesfully edited!');
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getAdmins(pagination:pagination) {
      this.loading = true;
      try {
        const res = await apifetchAdmins(pagination);
        if (res.status !== 200) {
          return;
        }

        this.loading = false;
        this.admins = res.data?.limit_admins;
        this.meta.total = res.data?.total;
      } catch (error) {
        this.loading = false;
        errorToast('Not Found!');
      }
    },

    async fetchOneAdmin(data: adminName) {
      this.loading = true;
      try {
        const res = await apiSearchAdmin(data);
        if (res.status !== 200) {
          return;
        }
        this.loading = false; 
        this.admins = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async fetchYourselfAdmin() {
      this.loading = true;

      try {
        // const res = await getOneYourself(String(this.self_admin.id));
        // if (res.status !== 200) {
        //   return;
        // }
        // console.log(res.data);
        
        // this.loading = false;
        // this.self_admin = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },


    async fetchsingleAdmin(id: string) {
      this.loading = true;
      try {
        const res = await getOneAdmin(id);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleAdmin = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async removeAdmin(id: string) {
      this.loading = true;
      try {
        const res = await deleteAdmin(id);
   
        if (res.status!== 204) {
          errorToast('Admin not deleted');
          errorToast(res.data.message)
          return;
        }
        this.loading = false;
        successToast('Admin deleted successfully');
        router.push({name:adminRoute.RT_ADMINS})
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    }

  }
});
