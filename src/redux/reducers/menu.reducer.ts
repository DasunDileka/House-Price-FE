import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, MENU_ACTION_TYPES } from "../../utilities/constants";
import { MenuDto, MenuStateDto } from "../../utilities/models";

const INITIAL_STATE: MenuStateDto = {

    userMenu: {
        data: [],
        error: null,
        isLoading: false,
        status: null
    }
}

const menuReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {

        // GET Menu 
        case MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                userMenu: {
                    ...state.userMenu,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: []
                }
            }
        case MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                userMenu: {
                    ...state.userMenu,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                userMenu: {
                    ...state.userMenu,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: []
                }
            }
        case MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                userMenu: {
                    ...state.userMenu,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: []
                }
            }
        default:
            return state

    }
}

export default menuReducer