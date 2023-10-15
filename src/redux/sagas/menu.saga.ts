import { put, call, takeEvery, delay } from 'redux-saga/effects'
import { ALERT_CONFIGS, COMMON_ACTION_TYPES, MENU_ACTION_TYPES} from '../../utilities/constants'
import { AxiosResponse } from 'axios'
import { AlertActionDto, MenuDto } from '../../utilities/models'
import { menuService } from '../../services/menu.service'

function * getImageList (action: {type: string}) {
    try {
        const menuList: AxiosResponse<MenuDto[]> = yield call(menuService.getMenuList)
        yield put({
            type: MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.SUCCESS,
            data: menuList.data
          })
    } catch (error) {
        yield put({
            type: MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.ERROR,
            error: error
          })
    }
}

function * menuSaga () {
    yield takeEvery(MENU_ACTION_TYPES.MENU_DATA + COMMON_ACTION_TYPES.REQUEST, getImageList)

}

export default menuSaga