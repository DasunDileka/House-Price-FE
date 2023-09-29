import { axiosPrivateInstance } from "."
import { SignupUserDto } from "../utilities/models"

const signupUser = async (payload: SignupUserDto) => {
    return axiosPrivateInstance.post('/api/User/UserRegistartion', payload)
}

export const registrationService = {
    signupUser
}