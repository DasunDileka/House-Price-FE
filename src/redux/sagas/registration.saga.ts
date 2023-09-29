import { delay, put, call, takeEvery } from "redux-saga/effects"
import { ALERT_CONFIGS, COMMON_ACTION_TYPES, REGISTRATION_ACTION_TYPES } from "../../utilities/constants"
import { AlertActionDto, SignupUserDto } from "../../utilities/models"
import { registrationService } from "../../services"

function* signupUser(action: {type: string, payload: SignupUserDto}) {
    try {
        // @ts-ignore
        const data = yield call(registrationService.signupUser, action.payload)
        console.log('data', data)
        const setAlert: AlertActionDto = {
          message: 'Successfully Added User',
          severity: 'success',
          type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.SUCCESS, data })
        yield put(setAlert)
      } catch (error: any) {
        const setAlert: AlertActionDto = {
          message: error,
          severity: 'error',
          type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.SET_ALERT
        }
        yield put({ type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.ERROR, error })
        yield put(setAlert)
      } finally {
        yield delay(ALERT_CONFIGS.TIMEOUT)
        yield put({ type: REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.CLEAR_ALERT })
      }
}

function* registrationSaga() {
    yield takeEvery(REGISTRATION_ACTION_TYPES.SIGNUP_USER + COMMON_ACTION_TYPES.REQUEST, signupUser)
  }
  
  export default registrationSaga