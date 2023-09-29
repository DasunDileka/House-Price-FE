import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'
import alertReducer from './alert.reducer'
import brandReducer from './brand.reducer'
import registrationReducer from './registration.reducer'
import loginReducer from './login.reducers'

const rootReducer = combineReducers({
  alert: alertReducer,
  products: productReducer,
  category: categoryReducer,
  brand: brandReducer,
  registration: registrationReducer,
  login: loginReducer
})
export default rootReducer
