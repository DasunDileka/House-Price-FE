import { CategoryStateDto } from "../../utilities/models";
import { APP_ACTION_STATUS, CATEGORY_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";

const INITIAL_STATE: CategoryStateDto = {
    addCategory: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    editCategory: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    categoryList: {
        data: [],
        error: null,
        isLoading: false,
        status: null
    }
}

const categoryReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                addCategory: {
                    ...state.addCategory,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                addCategory: {
                    ...state.addCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                addCategory: {
                    ...state.addCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                addCategory: {
                    ...state.addCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                editCategory: {
                    ...state.editCategory,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                editCategory: {
                    ...state.editCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                editCategory: {
                    ...state.editCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                editCategory: {
                    ...state.editCategory,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
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

export default categoryReducer