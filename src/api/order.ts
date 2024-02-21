import api from '@/plugins/axios';
// import { product, updateProduct } from '@/features/products/modules/product';

const url = import.meta.env.VITE_BASE_URL;


export function findAllOrder() {
  return api.get(url + '/api/order/all');
}

// export function findOneProduct(id: string) {
//   return api.get(url + `/api/product/${id}`);
// }

// export function findupdateProduct(updateProduct: updateProduct) {
//   return api.put(url + `/api/product/${updateProduct.id}`, updateProduct);
// }

// export function finddeleteProduct(id: string) {
//   return api.delete(url + `/api/product/${id}`);
// }
