import { BrandListDto } from "./brand.model";
import { categoryListDto } from "./category.model";
import { FormValidatorFeildDto } from "./core.model";

 export interface productListDto {
    id: number,
    name: string,
    description: string,
    quantity: number,
    price: number,
    brandId: number, 
    brand: string,
    categoryId: number,
    category: string
 }

 export interface ProductInfoDto {
   id?: number,
   name: string,
   price: number | null,
   quantity: number | null,
   description: string,
   categoryId: number | null,
   brandId: number | null,
   userId: number,
 }
 export interface ProductEditDto {
   id: number,
   name: string,
   price: number | null,
   quantity: number | null,
   description: string,
   categoryId: number,
   brandId: number,
   userId: number,
 }

 export interface ProductInitialStateDto {
  name: FormValidatorFeildDto<string>,
  price: FormValidatorFeildDto<number | null>,
  quantity: FormValidatorFeildDto<number | null>,
  description: FormValidatorFeildDto<string>,
  categoryId: FormValidatorFeildDto<categoryListDto>,
  brandId: FormValidatorFeildDto<BrandListDto>,
 }
 export interface ProductUpdateStateDto {
  id:  FormValidatorFeildDto<number>,
  name: FormValidatorFeildDto<string>,
  price: FormValidatorFeildDto<number | null>,
  quantity: FormValidatorFeildDto<number | null>,
  description: FormValidatorFeildDto<string>,
  categoryId: FormValidatorFeildDto<categoryListDto>,
  brandId: FormValidatorFeildDto<BrandListDto>,
 }