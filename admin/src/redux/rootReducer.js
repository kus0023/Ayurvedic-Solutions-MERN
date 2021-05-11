import { combineReducers } from 'redux'
import userReducer from './users/userReducer'
import productReducer from './products/productReducer'

const rootReducer=combineReducers({
    auth:userReducer,
    product:productReducer
})

export default rootReducer