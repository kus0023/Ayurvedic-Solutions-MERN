import * as searchTypes from "../types/Search.types";

const initialState = {
  isLoading: false,
  type: "product",
  list: [],
  query: "",
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case searchTypes.SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case searchTypes.SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case searchTypes.CHANGE_TYPE_PRODUCT:
      return {
        ...state,
        type: "product",
      };

    case searchTypes.CHANGE_TYPE_DISEASE:
      return {
        ...state,
        type: "disease",
      };

    case searchTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: [...[], ...action.payload],
      };
    case searchTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        list: [...[]],
      };

    case searchTypes.SET_QUERY_SEARCH:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
}
