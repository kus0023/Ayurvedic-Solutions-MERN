import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import CartReducer from "./Cart.reducer";
import DiseaseReducer from "./Disease.reducer";
import ProductReducer from "./Product.reducer";
import SearchReducer from "./Search.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  productState: ProductReducer,
  diseaseState: DiseaseReducer,
  searchState: SearchReducer,
  cartState: CartReducer,
});

export default rootReducer;
