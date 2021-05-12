import * as cartTypes from "../types/Cart.types";

const initialState = {
  isLoading: false,
  list: [],
  errors: null,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case cartTypes.SET_CART_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    case cartTypes.SET_CART_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case cartTypes.FETCH_CART_LIST_SUCCESS:
      return {
        ...state,
        list: [...[], ...action.payload],
        errors: null,
      };
    case cartTypes.FETCH_CART_LIST_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
