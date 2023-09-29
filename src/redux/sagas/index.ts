import { all } from 'redux-saga/effects'
import productSaga from './product.saga'
import categorySaga from './category.saga'
import brandSaga from './brand.saga'
import registrationSaga from './registration.saga'
import loginSaga from './login.saga'

export default function * rootSaga () {
  yield all([productSaga(), categorySaga(), brandSaga(), registrationSaga(), loginSaga()])
}
