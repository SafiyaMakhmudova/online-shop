import api from "@/plugins/axios"
import { updateCategory } from "@/features/products/modules/category"

const url1 = import.meta.env.VITE_BASE_URL

export function addCategoryApi(createFormData:any){
    return api({
        url:url1+"/api/category/create",
        method:'post',
        data:createFormData,
        headers:{
            'Content-Type':"multipart/form-data",
            'Access-Control-Allow-Origin':"*",
            'Accept':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('access_token')
        }
    })
}

export function findAllCategory(){
    return api.get(url1+'/api/category/all ')
}

export function findOneCategory(id:string){
    return api.get(url1+`/api/category/${id}`)
}

export function findupdateCategory(updateCategory:updateCategory){
    return api.put(url1+`/api/category/${updateCategory.id}`,updateCategory)
}

export function finddeleteCategory(id:string){
    return api.delete(url1+`/api/category/${id}`)
}