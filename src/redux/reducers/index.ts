import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import alertReducer from './alert.reducer'
import registrationReducer from './registration.reducer'
import loginReducer from './login.reducers'
import menuReducer from './menu.reducer'
import predictReducer from './prediction.reducers'

const rootReducer = combineReducers({
  alert: alertReducer,
  products: productReducer,
  registration: registrationReducer,
  login: loginReducer,
  menu:menuReducer,
  predict:predictReducer

})
export default rootReducer
