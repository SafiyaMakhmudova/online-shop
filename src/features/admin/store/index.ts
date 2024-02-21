import { defineStore } from 'pinia';
import router from '@/router';
import { create, updateByAdmin, apifetchAdmins, apiSearchAdmin, deleteAdmin } from '@/api/admin';
import { errorToast, successToast } from '@/utils/toast';
// import router from '@/router/index';
import { adminName, adminObj } from '@/modules/interfaces';
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
  } => {
    return {
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
      admin: []
    };
  },
  actions: {
    async authLogin(payload: adminLogin) {
      try {
        this.loading = true;
        const res = await login(payload);
        if (res?.data.tokens?.access_token) {

          this.self_admin = res.data.user;
          this.saveUser(res?.data);
          router.push({ name: adminRoute.RT_DASHBOARD });
        }
      } catch (err) {
        errorToast('Error');
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
        if (res?.data?.status !== 200) {
          return;
        }
        this.loading = false;
        successToast('Successfully added');
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    },
    
    async updateAdmin(data: adminObj) {
      try {
        const res = await updateByAdmin(data);
        if (res.status !== 204) {
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

    async getAdmins() {
      this.loading = true;
      try {
        const res = await apifetchAdmins();
        if (res.status !== 200) {
          return;
        }

        this.loading = false;
        this.admins = res.data;
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
        this.admin = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    },

    async deleteAdmin(id: string) {
      this.loading = true;
      try {
        const res = await deleteAdmin(id);

        if (res.status !== 200) {
          errorToast('Admin not deleted');
          return;
        }
        this.loading = false;
        successToast('Admin deleted successfully');
        location.reload();
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      }
    }

    // saveUser(data: personData) {
    //   localStorage.setItem('access_token', data?.token);
    //   this.user = data?.person;
    // },
    // clearUser() {
    //   localStorage.removeItem('access_token');
    //   this.user = null;
    //   router.replace({ name: RT_LOGIN });
    // }
  }
});
