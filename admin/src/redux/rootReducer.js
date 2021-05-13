import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import productReducer from "./products/productReducer";
import AuthenticationReducer from "./dashboard/AuthenticationReducer";

const rootReducer = combineReducers({
  auth: userReducer,
  product: productReducer,
  authenticationPage: AuthenticationReducer,
});

export default rootReducer;
