import { BrandStateDto } from "../../utilities/models";
import { APP_ACTION_STATUS, BRAND_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";

const INITIAL_STATE: BrandStateDto = {
    addBrand: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    editBrand: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    brandList: {
        data: [],
        error: null,
        isLoading: false,
        status: null
    }
}

const brandReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {
        case BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                addBrand: {
                    ...state.addBrand,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                addBrand: {
                    ...state.addBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                addBrand: {
                    ...state.addBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                addBrand: {
                    ...state.addBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                editBrand: {
                    ...state.editBrand,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                editBrand: {
                    ...state.editBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                editBrand: {
                    ...state.editBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                editBrand: {
                    ...state.editBrand,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                brandList: {
                    ...state.brandList,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                brandList: {
                    ...state.brandList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                brandList: {
                    ...state.brandList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case BRAND_ACTION_TYPES.GET_BRAND_LIST+ COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                brandList: {
                    ...state.brandList,
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

export default brandReducer