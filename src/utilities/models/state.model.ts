import { BrandListDto } from "./brand.model";
import { categoryListDto } from "./category.model";
import { StateObjectDto } from "./common.model";
import { SignInUserDetailDto } from "./login.model";
import { productListDto } from "./product.model";

export interface ProductStateDto {
    addProduct: StateObjectDto<null>
    editProduct: StateObjectDto<null>
    productList: StateObjectDto<productListDto[]>
}

export interface CategoryStateDto {
    addCategory: StateObjectDto<null>
    editCategory: StateObjectDto<null>
    categoryList: StateObjectDto<categoryListDto[]>
}

export interface BrandStateDto {
    addBrand: StateObjectDto<null>
    editBrand: StateObjectDto<null>
    brandList: StateObjectDto<BrandListDto[]>
}

export interface RegistrationStateDto {
    signupUser: StateObjectDto<null>
}

export interface LoginStateDto {
    signInUser: StateObjectDto<SignInUserDetailDto>
}
