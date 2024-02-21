import axiosAdmin from '@/plugins/axios';
import { adminLogin } from '@/features/admin/modules';

const url = import.meta.env.VITE_BASE_URL;

export function  login(payload:adminLogin) {
  return axiosAdmin.post(url+"/api/admin/signin/", payload);
}

