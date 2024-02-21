export interface category{
    id?:number | string | undefined;
    name:string;
    description:string;
    image:any;
    createdAt:any
  }
  
export interface updateCategory{
    id?:number;
    name?:string;
    description?:string;
    image?:any
}