import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import ProductReducer from "./Product.reducer";
import SearchReducer from "./Search.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  productState: ProductReducer,
  searchState: SearchReducer,
});

export default rootReducer;
