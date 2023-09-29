import { axiosPrivateInstance } from "./index";
import { categoryEditDto, categoryInfoDto, categoryListDto } from "../utilities/models";
import { AxiosResponse } from "axios";

const addCategory = async (payload: categoryInfoDto) => {
    return axiosPrivateInstance.post('/api/Category', payload)
}

const editCategory = async (payload: categoryEditDto) => {
    return axiosPrivateInstance.put(`/api/Category/${payload.id}`, payload)
}

const getCategoryList = (): Promise<AxiosResponse<categoryListDto[]>> => {
    return axiosPrivateInstance.get('/api/Category')
}

export const categoryService = {
    addCategory,
    editCategory,
    getCategoryList
}