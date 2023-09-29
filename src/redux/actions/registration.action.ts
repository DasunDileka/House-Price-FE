import { COMMON_ACTION_TYPES, REGISTRATION_ACTION_TYPES } from "../../utilities/constants"
import { SignupUserDto } from "../../utilities/models"

const registerUser = (payload: SignupUserDto) => {
    return {
        type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.REQUEST,
        payload: payload
    }
}

export const registrationActions = {
    registerUser
}