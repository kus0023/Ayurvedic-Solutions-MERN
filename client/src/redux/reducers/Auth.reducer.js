import * as authType from "../types/Auth.types";

const initialState = {
  isReady: false,
  data: {
    user: null,
    token: null,
  },
  login: { error: null, isLoading: false },
  register: { error: null, isLoading: false },
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

    default:
      return state;
  }
}