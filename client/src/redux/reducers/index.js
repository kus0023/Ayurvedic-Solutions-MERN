import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import DiseaseReducer from "./Disease.reducer";
import ProductReducer from "./Product.reducer";
import SearchReducer from "./Search.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  productState: ProductReducer,
  diseaseState: DiseaseReducer,
  searchState: SearchReducer,
});

export default rootReducer;
