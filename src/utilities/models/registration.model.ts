import { FormValidatorFeildDto } from "./core.model"

export interface SignupFormInitialStateDto {
    name: FormValidatorFeildDto<string>
    email: FormValidatorFeildDto<string>
    password: FormValidatorFeildDto<string>
    contact: FormValidatorFeildDto<string>
}

export interface SignupUserDto {
    name: string
    email: string
    password: string
    contact: string
    userType: string
}
