import { FormValidatorFeildDto } from "./core.model";

export interface BrandInfoDto {
    id?: number,
    name: string,
    description: string
}
export interface BrandEditDto {
    id: number,
    name: string,
    description: string
}
export interface BrandListDto {
    id: number,
    name: string,
    description: string
}

export interface BrandInitialStateDto {
    name: FormValidatorFeildDto<string>
    description: FormValidatorFeildDto<string>
}

export interface BrandUpdateStateDto {
    id: FormValidatorFeildDto<number>,
    name: FormValidatorFeildDto<string>
    description: FormValidatorFeildDto<string>
}