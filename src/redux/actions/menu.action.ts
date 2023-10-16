import { COMMON_ACTION_TYPES, MENU_ACTION_TYPES } from "../../utilities/constants"
import { MenuDto } from "../../utilities/models"

const menuData = () => {
    return {
        type: MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.REQUEST
    }
}

export const menuActions = {
    menuData
}