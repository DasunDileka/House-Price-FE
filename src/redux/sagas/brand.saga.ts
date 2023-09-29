import { call, put, takeEvery, delay } from 'redux-saga/effects'
import { ALERT_CONFIGS, BRAND_ACTION_TYPES, COMMON_ACTION_TYPES } from "../../utilities/constants";
import { AlertActionDto, BrandEditDto, BrandInfoDto, BrandListDto } from "../../utilities/models";
import { AxiosResponse } from 'axios';
import { brandService } from '../../services';

function* postBrand(action: { type: string, payload: BrandInfoDto }) {
  try {
    // @ts-ignore
    const data = yield call(brandService.addBrand, action.payload)
    const setAlert: AlertActionDto = {
      message: 'Successfully Added Brand',
      severity: 'success',
      type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.SUCCESS, data })
    yield put(setAlert)
  } catch (error: any) {
    const setAlert: AlertActionDto = {
      message: error,
      severity: 'error',
      type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.ERROR, error })
    yield put(setAlert)
  } finally {
    yield delay(ALERT_CONFIGS.TIMEOUT)
    yield put({ type: BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.CLEAR_ALERT })
  }
}

function* editBrand(action: { type: string, payload: BrandEditDto }) {
  try {
    // @ts-ignore
    const data = yield call(brandService.editBrand, action.payload)
    const setAlert: AlertActionDto = {
      message: 'Successfully updated brand',
      severity: 'success',
      type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.SUCCESS, data })
    yield put(setAlert)
  } catch (error: any) {
    const setAlert: AlertActionDto = {
      message: error,
      severity: 'error',
      type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({ type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.ERROR, error })
    yield put(setAlert)
  } finally {
    yield delay(ALERT_CONFIGS.TIMEOUT)
    yield put({ type: BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.CLEAR_ALERT })
  }
}

function * getBrandList (action: {type: string}) {
  try {
    const brandList: AxiosResponse<BrandListDto[]> = yield call(brandService.getBrandList)
    yield put({
      type: BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.SUCCESS,
      data: brandList.data
    })
  } catch (error) {
    yield put({
      type: BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.ERROR,
      error: error
    })
  }
}

function* brandSaga() {
  yield takeEvery(BRAND_ACTION_TYPES.POST_BRAND + COMMON_ACTION_TYPES.REQUEST, postBrand)
  yield takeEvery(BRAND_ACTION_TYPES.GET_BRAND_LIST + COMMON_ACTION_TYPES.REQUEST, getBrandList)
  yield takeEvery(BRAND_ACTION_TYPES.UPDATE_BRAND + COMMON_ACTION_TYPES.REQUEST, editBrand)
}

export default brandSaga