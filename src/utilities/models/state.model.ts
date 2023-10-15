
import { StateObjectDto } from "./common.model";
import { SignInUserDetailDto } from "./login.model";
import { productListDto } from "./product.model";
import { MenuDto } from "./menu.model";
import { PredictionDto, PredictionResponse } from "./prediction.model";

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

export interface MenuStateDto
{
    userMenu :StateObjectDto<MenuDto[]>
}

export interface PredictStateDto
{
    predict: StateObjectDto<string>
}