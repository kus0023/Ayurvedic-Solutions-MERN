import { combineReducers } from 'redux'
import userReducer from './users/userReducer'
import productReducer from './products/productReducer'

const rootReducer=combineReducers({
    user:userReducer,
    product:productReducer
})

export default rootReducer