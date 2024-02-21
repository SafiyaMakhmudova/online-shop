import api from '@/plugins/axios';
import { mediaObj } from '@/modules/interfaces';

const url = import.meta.env.VITE_BASE_URL;

export function addMediaApi(data: mediaObj) {
  return api.post(url + '/api/media/create', data);
}

export function findAllMedia() {
  return api.get(url + '/api/media/all');
}

export function findOneMedia(id: string) {
  return api.get(url + `/api/media/${id}`);
}

// export function findupdateMedia(data: mediaObj) {
//   return api.put(url + `/api/media/${data.id}`, data);
// }

export function finddeleteMedia(id:string){
    return api.delete(url+`/api/media/${id}`)
}