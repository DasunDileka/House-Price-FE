import { put, call, takeEvery } from "redux-saga/effects"
import { COMMON_ACTION_TYPES, LOGIN_ACTION_TYPES } from "../../utilities/constants"
import { AlertActionDto, SignInUserDetailDto, SignInUserParamsDto } from "../../utilities/models"
import { loginService } from "../../services"
import { AxiosResponse } from "axios"

function* signInUser(action: { type: string, params: SignInUserParamsDto }) {
  try {
    const loggedUser: AxiosResponse<SignInUserDetailDto> = yield call(loginService.signInUser, action.params)
    console.log("code", loggedUser.status)
    if (loggedUser.status === 204) {
console.log("204")
      const setAlert: AlertActionDto = {
        message: 'Invalid user Email or password',
        severity: 'error',
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SET_ALERT
      }
      yield put({
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.ERROR,
        data: loggedUser.data
      })
      yield put(setAlert)

    } 
    else if (loggedUser.status ==null)
    {
    {
      const setAlert: AlertActionDto = {
        message: 'Successfully Registed',
        severity: 'success',
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SET_ALERT
      }
   
      yield put(setAlert)
    }
      
    }
    else {
console.log("success")
      const setAlert: AlertActionDto = {
        message: 'Successfully Login',
        severity: 'success',
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SET_ALERT
      }
      yield put({
        type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SUCCESS,
        data: loggedUser.data
      })
      yield put(setAlert)
    }
  } catch (error: any) {
    const setAlert: AlertActionDto = {
      message: "Invalid user Email or password",
      severity: 'error',
      type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.SET_ALERT
    }
    yield put({
      type: LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.ERROR,
      error: error
    })
    yield put(setAlert)
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_ACTION_TYPES.SIGNIN_USER + COMMON_ACTION_TYPES.REQUEST, signInUser)
}

export default loginSaga