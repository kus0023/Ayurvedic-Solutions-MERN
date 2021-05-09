import * as authType from "../types/Auth.types";

const initialState = {
  isReady: false,

  user: null,

  login: { error: null, isLoading: false },
  register: { error: null, isLoading: false },
  logout: { error: null, isLoading: false },
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case authType.SET_READY_FALSE:
      return {
        ...state,
        isReady: false,
      };
    case authType.SET_READY_TRUE:
      return {
        ...state,
        isReady: true,
      };

    case authType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case authType.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case authType.SET_LOGOUT_LOADING_TRUE:
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: true,
        },
      };
    case authType.SET_LOGOUT_LOADING_FALSE:
      return {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
        },
      };

    default:
      return state;
  }
}
