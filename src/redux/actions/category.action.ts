import { CATEGORY_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";
import { categoryInfoDto } from "../../utilities/models";

const addCategory = (params: categoryInfoDto) => {
    return { type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.REQUEST, payload: params }
}

const editCategory = (params: categoryInfoDto) => {
    return { type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.REQUEST, payload: params }
}

const getCategoryList = () => {
    return {
        type: CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.REQUEST
    }
}

export const CategoryActions = {
    addCategory,
    editCategory,
    getCategoryList
}