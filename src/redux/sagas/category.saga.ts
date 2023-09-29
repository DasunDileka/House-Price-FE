import { call, put, takeEvery, delay } from 'redux-saga/effects'
import { ALERT_CONFIGS, CATEGORY_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";
import { AlertActionDto, categoryEditDto, categoryInfoDto, categoryListDto } from "../../utilities/models";
import { AxiosResponse } from 'axios';
import { categoryService } from '../../services';

function* postCategory(action: { type: string, payload: categoryInfoDto }) {
  try {
    // @ts-ignore
    const data = yield call(categoryService.addCategory, action.payload)
    const setAlert: AlertActionDto = {
      message: 'Successfully Added Category',
      severity: 'success',
      type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.SUCCESS, data })
    yield put(setAlert)
  } catch (error: any) {
    const setAlert: AlertActionDto = {
      message: error,
      severity: 'error',
      type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.ERROR, error })
    yield put(setAlert)
  } finally {
    yield delay(ALERT_CONFIGS.TIMEOUT)
    yield put({ type: CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.CLEAR_ALERT })
  }
}

function* editCategory(action: { type: string, payload: categoryEditDto }) {
  try {
    // @ts-ignore
    const data = yield call(categoryService.editCategory, action.payload)
    const setAlert: AlertActionDto = {
      message: 'Successfully updated Category',
      severity: 'success',
      type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.SUCCESS, data })
    yield put(setAlert)
  } catch (error: any) {
    const setAlert: AlertActionDto = {
      message: error,
      severity: 'error',
      type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.ERROR, error })
    yield put(setAlert)
  } finally {
    yield delay(ALERT_CONFIGS.TIMEOUT)
    yield put({ type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.CLEAR_ALERT })
  }
}

function * getCategoryList (action: {type: string}) {
  try {
    const categoryList: AxiosResponse<categoryListDto[]> = yield call(categoryService.getCategoryList)
    yield put({
      type: CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.SUCCESS,
      data: categoryList.data
    })
  } catch (error) {
    yield put({
      type: CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.ERROR,
      error: error
    })
  }
}

function* categorySaga() {
  yield takeEvery(CATEGORY_ACTION_TYPES.POST_CATEGORY + COMMON_ACTION_TYPES.REQUEST, postCategory)
  yield takeEvery(CATEGORY_ACTION_TYPES.GET_CATEGORY_LIST + COMMON_ACTION_TYPES.REQUEST, getCategoryList)
  yield takeEvery(CATEGORY_ACTION_TYPES.UPDATE_CATEGORY + COMMON_ACTION_TYPES.REQUEST, editCategory)
}

export default categorySaga