import { axiosPrivateInstance } from "./index";
import { BrandEditDto, BrandInfoDto, BrandListDto } from "../utilities/models";
import { AxiosResponse } from "axios";

const addBrand = async (payload: BrandInfoDto) => {
    return axiosPrivateInstance.post('/api/Brand', payload)
}

const editBrand = async (payload: BrandEditDto) => {
    return axiosPrivateInstance.put(`/api/Brand/${payload.id}`, payload)
}

const getBrandList = (): Promise<AxiosResponse<BrandListDto[]>> => {
    return axiosPrivateInstance.get('/api/Brand')
}

export const brandService = {
    addBrand,
    editBrand,
    getBrandList
}