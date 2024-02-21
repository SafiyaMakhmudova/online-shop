export interface Product {
  id: number;
  count: number;
  // Add other properties of your product here
}

export interface ProductStoreState {
  cartData: Product[];
  length: number;
}

export interface addProductObj {
  id?: number | string;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
  category_id:number;
}

export interface productObj {
  id?: number | string;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
  category:[
    {
      category_id : number,
      name: string,
      description:string,
      image: string
    }
  ]
  media: [
    {
      product_id: number;
      media_link: string;
    }
  ];
}

export interface updateProduct {
  id: string;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
}
