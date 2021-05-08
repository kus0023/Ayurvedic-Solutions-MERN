import { combineReducers } from "redux";
import ProductReducer from "./Product.reducer";

const rootReducer = combineReducers({
  productState: ProductReducer,
});

export default rootReducer;
