import { BRAND_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";
import { BrandEditDto, BrandInfoDto } from "../../utilities/models";

const addBrand = (payload: BrandInfoDto) => {
    return { type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.REQUEST, payload: payload }
}

const editBrand = (payload: BrandEditDto) => {
    return { type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.REQUEST, payload: payload }
}

const getBrandList = () => {
    return {
        type: BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.REQUEST
    }
}

export const brandActions = {
    addBrand,
    editBrand,
    getBrandList
}