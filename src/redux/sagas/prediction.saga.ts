import { delay, put, call, takeEvery } from "redux-saga/effects"
import { ALERT_CONFIGS, COMMON_ACTION_TYPES, PREDICT_ACTION_TYPES } from "../../utilities/constants"
import { AlertActionDto, PredictionDto } from "../../utilities/models"
import { predictioService } from "../../services"

function* predictionValue(action: {type: string, payload: PredictionDto}) {
    try {
        // @ts-ignore
        const data = yield call(predictioService.predictCount, action.payload)
        console.log('data', data)
        const setAlert: AlertActionDto = {
          message: 'Successfully Added User',
          severity: 'success',
          type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.SUCCESS, data: data.data.prediction })
        yield put(setAlert)
      } catch (error: any) {
        const setAlert: AlertActionDto = {
          message: error,
          severity: 'error',
          type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.ERROR, error })
        yield put(setAlert)
      } finally {
        yield delay(ALERT_CONFIGS.TIMEOUT)
        yield put({ type: PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.CLEAR_ALERT })
      }
}

function* predictionSaga() {
    yield takeEvery(PREDICT_ACTION_TYPES.PREDICT_VALUE + COMMON_ACTION_TYPES.REQUEST, predictionValue)
  }
  
  export default predictionSaga