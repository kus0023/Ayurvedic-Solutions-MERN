import {
  GET_PRODUCT_LIST,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../types/Product.types";

const initialState = {
  isLoading: false,
  result: null,
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
}
