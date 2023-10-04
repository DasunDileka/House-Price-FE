import { AxiosResponse } from "axios"
import { ProductEditDto, ProductInfoDto, productListDto } from "../utilities/models"
import { axiosPrivateInstance } from "."

const addProduct = async (payload: ProductInfoDto) => {
    return axiosPrivateInstance.post('/api/House/NewHouseDetails', payload)
}

const editProduct = async (payload: ProductEditDto) => {
    return axiosPrivateInstance.put(`/api/House/updateHouseDetails?Id=${payload.id}`, payload)
}

const getProductList = (): Promise<AxiosResponse<productListDto[]>> => {
    console.log("service")
    return axiosPrivateInstance.get('/api/House/GetHouseDetails')
}

export const productService = {
    addProduct,
    editProduct,
    getProductList
}