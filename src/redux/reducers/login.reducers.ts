import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, LOGIN_ACTION_TYPES } from "../../utilities/constants"
import { LoginStateDto, SignInUserDetailDto } from "../../utilities/models"

const INITIAL_STATE: LoginStateDto = {
    signInUser: {
        data: {} as SignInUserDetailDto,
        error: null,
        isLoading: false,
        status: null
    }
}

const loginReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {
        case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                signInUser: {
                    ...state.signInUser,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                signInUser: {
                    ...state.signInUser,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                signInUser: {
                    ...state.signInUser,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                signInUser: {
                    ...state.signInUser,
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

export default loginReducer