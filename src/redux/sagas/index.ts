import { all } from 'redux-saga/effects'
import productSaga from './product.saga'
import registrationSaga from './registration.saga'
import loginSaga from './login.saga'
import predictionSaga from './prediction.saga'

export default function * rootSaga () {
  yield all([productSaga(),registrationSaga(), loginSaga(), predictionSaga()])
}
