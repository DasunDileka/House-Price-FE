import { axiosPrivateInstance } from "."
import { SignInUserParamsDto } from "../utilities/models"

const signInUser = async (params: SignInUserParamsDto) => {
    return axiosPrivateInstance.post(`/api/User/UserLoginDetails?emailID=${params.emailID}&password=${params.password}`,params)
}

export const loginService = {
    signInUser
}