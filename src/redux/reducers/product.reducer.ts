import { APP_ACTION_STATUS, COMMON_ACTION_TYPES, PRODUCT_ACTION_TYPES } from "../../utilities/constants";
import { ProductStateDto } from "../../utilities/models";

const INITIAL_STATE: ProductStateDto = {
    addProduct: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    editProduct: {
        data: null,
        error: null,
        isLoading: false,
        status: null
    },
    productList: {
        data: [],
        error: null,
        isLoading: false,
        status: null
    }
}

const productReducer = (state = INITIAL_STATE, action: any) => {
    switch ((action.type)) {

        // ADD PRODUCT
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                addProduct: {
                    ...state.addProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }

        // UPDATE PRODUCT
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                editProduct: {
                    ...state.editProduct,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: null
                }
            }
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                editProduct: {
                    ...state.editProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                editProduct: {
                    ...state.editProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: null
                }
            }
        case PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                editProduct: {
                    ...state.editProduct,
                    isLoading: false,
                    status: APP_ACTION_STATUS.INITIAL,
                    error: null,
                    data: null
                }
            }

        // GET PRODUCT LIST 
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.REQUEST:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    isLoading: true,
                    status: APP_ACTION_STATUS.LOADING,
                    error: null,
                    data: []
                }
            }
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.SUCCESS:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.SUCCESS,
                    error: null,
                    data: action.data
                }
            }
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.ERROR:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    isLoading: false,
                    status: APP_ACTION_STATUS.ERROR,
                    error: action.error,
                    data: []
                }
            }
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.CLEAR:
            return {
                ...state,
                productList: {
                    ...state.productList,
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

export default productReducer