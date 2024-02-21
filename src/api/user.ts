import axiosAdmin from '@/plugins/axios';
import { UserOtp, UserVerify } from '@/features/users/modules';

const url = import.meta.env.VITE_BASE_URL;

export function otp(payload: UserOtp) {
  return axiosAdmin.post(url + '/api/user/otp/', payload);
}

export function verify(code:UserVerify){
  return axiosAdmin.post(url + '/api/user/verify/', code)
}
