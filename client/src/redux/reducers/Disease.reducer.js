import {
  GET_DISEASE_LIST,
  GET_ONE_DISEASE,
  GET_ONE_DISEASE_ERROR,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../types/Disease.types";

const initialState = {
  isLoading: false,
  result: null,
  diseaseDetail: null,
  diseaseDetailError: null,
};

export default function DiseaseReducer(state = initialState, action) {
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
    case GET_DISEASE_LIST:
      return {
        ...state,
        result: action.payload,
      };

    case GET_ONE_DISEASE:
      return {
        ...state,
        diseaseDetail: action.payload,
        diseaseDetailError: null,
      };
    case GET_ONE_DISEASE_ERROR:
      return {
        ...state,
        diseaseDetailError: action.payload,
        diseaseDetail: null,
      };

    default:
      return state;
  }
}
