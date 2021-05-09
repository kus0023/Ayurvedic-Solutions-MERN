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

    case authType.SET_LOGIN_LOADING_FALSE:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
        },
      };
    case authType.SET_LOGIN_LOADING_TRUE:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: true,
        },
      };

    case authType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        login: {
          ...state.login,
          error: null,
        },
      };
    case authType.LOGIN_FAILED_WITH_ERROR:
      return {
        ...state,
        user: null,
        login: {
          ...state.login,
          error: action.payload,
        },
      };

    case authType.SET_REGISTER_LOADING_FALSE:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
        },
      };
    case authType.SET_REGISTER_LOADING_TRUE:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: true,
        },
      };

    case authType.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          error: null,
        },
      };
    case authType.REGISTER_FAILED_WITH_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          error: action.payload,
        },
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
