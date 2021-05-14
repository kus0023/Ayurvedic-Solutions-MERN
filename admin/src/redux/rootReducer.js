import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import productReducer from "./products/productReducer";
import AuthenticationReducer from "./dashboard/AuthenticationReducer";
import diseaseReducer from "./disease/diseaseReducer"

const rootReducer = combineReducers({
  auth: userReducer,
  product: productReducer,
  authenticationPage: AuthenticationReducer,
  disease: diseaseReducer
});

export default rootReducer;
