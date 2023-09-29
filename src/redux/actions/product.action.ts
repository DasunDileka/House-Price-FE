import { COMMON_ACTION_TYPES, PRODUCT_ACTION_TYPES } from "../../utilities/constants"
import { ProductEditDto, ProductInfoDto } from "../../utilities/models"

const addProduct = (payload:ProductInfoDto) => {
    return {type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.REQUEST, payload: payload}
}

const editProduct = (payload: ProductEditDto) => {
    return {type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.REQUEST, payload: payload}
}

const getProductList = () => {
    return {
        type: PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.REQUEST
    }
}

export const productActions = {
    addProduct,
    getProductList,
    editProduct
}