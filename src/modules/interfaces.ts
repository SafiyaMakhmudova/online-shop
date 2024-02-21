export interface adminObj {
  id?: string;
  first_name: string;
  last_name: string;
  address: string;
  password: string;
  confirim_password: string;
  email: string;
  phone: string;
  is_superAdmin?: boolean;
  is_active?: boolean;
}



export interface mediaObj {
  product_id: number;
  media_link: string;
}

export interface UserOtp {
  phone: string;
}

export interface cartObj {
  id?: string | number;
  price?: string;
}

 export interface CartItem {
  id: string;
  price: string | number;
  count: number;
}


export interface searchProductObj {
  name?: string;
}

export interface CategoryMap {
  id?:number | string | undefined;
  name:string;
  description:string;
  image:any;
  createdAt:any
}


export interface adminName{
  name: string;
}

export interface admin{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone: string;
  is_active: boolean;

}