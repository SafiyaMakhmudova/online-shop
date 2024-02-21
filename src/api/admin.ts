import api from '@/plugins/axios';
import { adminName, adminObj } from '@/modules/interfaces';

const url = import.meta.env.VITE_BASE_URL;

export function create(data: adminObj) {
  return api.post(url + '/api/admin/signup', data);
}

export function updateByAdmin(data: adminObj) {
  return api.put(url + `/api/admin/update${data.id}`, data);
}

export function apifetchAdmins() {
  return api.get(url + '/api/admin/all');
}

export function apiSearchAdmin(data: adminName) {
  return api.get(url + `/api/admin/search/${data.name}`);
}

export function deleteAdmin(id: string) {
  return api.delete(url + `/api/admin/remove/${id}`);
}
