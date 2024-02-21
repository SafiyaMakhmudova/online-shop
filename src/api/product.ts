import api from '@/plugins/axios';
import { addProductObj,updateProduct } from '@/features/products/modules/product';
import {searchProductObj} from '@/modules/interfaces';

const url = import.meta.env.VITE_BASE_URL;

export function addProductApi(product: addProductObj) {
  return api.post(url + '/api/product/create', product);
}

export function findAllProduct() {
  return api.get(url + '/api/product/all');
}

export function SearchProduct(product: searchProductObj) {
  return api.get(url + `/api/product/search?name=${product.name}`);
}

export function findOneProduct(id: string) {
  return api.get(url + `/api/product/${id}`);
}

export function findupdateProduct(updateProduct: updateProduct) {
  return api.put(url + `/api/product/${updateProduct.id}`, updateProduct);
}

export function finddeleteProduct(id:string){
    return api.delete(url+`/api/product/${id}`)
}