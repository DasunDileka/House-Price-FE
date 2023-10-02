import { FormValidatorFeildDto } from "./core.model";

export interface categoryInfoDto {
    id?: number,
    name: string
}
export interface categoryEditDto {
    id: number,
    name: string
}
export interface categoryListDto {
    id: number,
    name: string
}

export interface CategoryInitialStateDto {
    name: FormValidatorFeildDto<string>
}

export interface CategoryUpdateStateDto {
    id: FormValidatorFeildDto<number>,
    name: FormValidatorFeildDto<string>
}