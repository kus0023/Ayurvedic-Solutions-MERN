import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import ProductReducer from "./Product.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  productState: ProductReducer,
});

export default rootReducer;
