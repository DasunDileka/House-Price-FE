import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, REGISTRATION_ACTION_TYPES } from "../../utilities/constants"
import { RegistrationStateDto } from "../../utilities/models"

const INITIAL_STATE: RegistrationStateDto = {
    signupUser: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    }
}

const registrationReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {
        case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                signupUser: {
                    ...state.signupUser,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }

        default:
            return state

    }
}

export default registrationReducer