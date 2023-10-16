import { AxiosResponse } from "axios"
import { axiosPrivateInstance } from "."
import { MenuDto } from "../utilities/models"

const getMenuList = (): Promise<AxiosResponse<MenuDto[]>> => {
    console.log("service")
    return axiosPrivateInstance.get('/api/House/GetImages')
}

export const menuService = {
    getMenuList
}