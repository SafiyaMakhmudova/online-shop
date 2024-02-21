import { defineStore } from 'pinia';
// import router from '../../../router';
import { useToast } from 'vue-toastification';
import { UserOtp, UserVerify } from '@/features/users/modules';
import { otp, verify } from '@/api/user';
import { successToast } from '@/utils/toast';
import router from '@/router/index';
import { userRoute } from '@/constants/routes/user';

const toast = useToast();

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    codesss: ''
  }),
  actions: {
    async otp(payload: UserOtp) {
      try {
        const res = await otp(payload);
        this.codesss = res.data.Details;
        if (res?.data.tokens?.access_token) {
          localStorage.setItem('access_token', res.data.tokens.access_token);
          //   router.push({ name: 'AdminHome' });
        }
      } catch (err) {
        toast.warning('Error');
      }
    },

    async verifyOtp(code: UserVerify) {
      try {
        const res = await verify(code);
        if (res.status !== 201) {
          toast.error('Code is not valid');
          return;
        }
        router.push({name: userRoute.RT_HOME})
        successToast("Success")
      } catch (error) {
        toast.error('Error');
      }
    }
  }
});
