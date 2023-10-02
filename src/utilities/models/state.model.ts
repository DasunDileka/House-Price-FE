
import { StateObjectDto } from "./common.model";
import { SignInUserDetailDto } from "./login.model";
import { productListDto } from "./product.model";

export interface ProductStateDto {
    addProduct: StateObjectDto<null>
    editProduct: StateObjectDto<null>
    productList: StateObjectDto<productListDto[]>
}


export interface RegistrationStateDto {
    signupUser: StateObjectDto<null>
}

export interface LoginStateDto {
    signInUser: StateObjectDto<SignInUserDetailDto>
}
