import { COMMON_ACTION_TYPES, LOGIN_ACTION_TYPES } from "../../utilities/constants"
import { SignInUserParamsDto } from "../../utilities/models"

const signInUser = (params: SignInUserParamsDto) => {
    return {
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.REQUEST,
        params: params
    }
}

const signInUserClear = () => {
    return {
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.CLEAR,
    }
}

export const loginActions = {
    signInUser,
    signInUserClear
}