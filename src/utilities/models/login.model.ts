import { FormValidatorFeildDto } from "./core.model"

export interface SignInFormInitialStateDto {
    emailID: FormValidatorFeildDto<string>
    password: FormValidatorFeildDto<string>
}

export interface SignInUserParamsDto {
    emailID: string
    password: string
}

export interface SignInUserDetailDto {
    id: number
    name: string
    email: string
    password: string
    contact: string
    userType: string
}
