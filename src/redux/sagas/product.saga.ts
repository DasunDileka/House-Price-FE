import { put, call, takeEvery, delay } from 'redux-saga/effects'
import { ALERT_CONFIGS, COMMON_ACTION_TYPES, PRODUCT_ACTION_TYPES } from '../../utilities/constants'
import { AxiosResponse } from 'axios'
import { AlertActionDto, ProductEditDto, ProductInfoDto, productListDto } from '../../utilities/models'
import { productService } from '../../services/product.service'

function * postProduct(action: {type: string, payload: ProductInfoDto}){
    try {
            // @ts-ignore
        const data = yield call(productService.addProduct, action.payload)
        const setAlert: AlertActionDto = {
          message: 'Successfully Added product',
          severity: 'success',
          type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.SUCCESS, data })
        yield put(setAlert)
      } catch (error: any) {
        const setAlert: AlertActionDto = {
          message: error,
          severity: 'error',
          type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.ERROR, error })
        yield put(setAlert)
      } finally {
        yield delay(ALERT_CONFIGS.TIMEOUT)
        yield put({ type: PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.CLEAR_ALERT })
      }
    }

    function* editProduct(action: { type: string, payload: ProductEditDto }) {
        try {
          // @ts-ignore
          const data = yield call(productService.editProduct, action.payload)
          const setAlert: AlertActionDto = {
            message: 'Successfully updated product',
            severity: 'success',
            type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT
          }
          yield put({ type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.SUCCESS, data })
          yield put(setAlert)
        } catch (error: any) {
          const setAlert: AlertActionDto = {
            message: error,
            severity: 'error',
            type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.SET_ALERT
          }
          yield put({ type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.ERROR, error })
          yield put(setAlert)
        } finally {
          yield delay(ALERT_CONFIGS.TIMEOUT)
          yield put({ type: PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.CLEAR_ALERT })
        }
      }
      
function * getProductList (action: {type: string}) {
    try {
        const productList: AxiosResponse<productListDto[]> = yield call(productService.getProductList)
        yield put({
            type: PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.SUCCESS,
            data: productList.data
          })
    } catch (error) {
        yield put({
            type: PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.ERROR,
            error: error
          })
    }
}

function * productSaga () {
    yield takeEvery(PRODUCT_ACTION_TYPES.GET_PRODUCT_LIST + COMMON_ACTION_TYPES.REQUEST, getProductList)
    yield takeEvery(PRODUCT_ACTION_TYPES.POST_PRODUCT + COMMON_ACTION_TYPES.REQUEST, postProduct)
    yield takeEvery(PRODUCT_ACTION_TYPES.UPDATE_PRODUCT + COMMON_ACTION_TYPES.REQUEST, editProduct)
}

export default productSaga

