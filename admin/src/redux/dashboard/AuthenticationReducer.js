import * as authenticationType from "./AuthenticationType";

const initialState = {
  isLoading: false,
  userList: [],
  adminList: [],
  error: {
    user: null,
    admin: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case authenticationType.SET_LOADING_TRUE:
      return { ...state, isLoading: true };

    case authenticationType.SET_LOADING_FALSE:
      return { ...state, isLoading: false };

    case authenticationType.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: [...[], ...payload],
        error: {
          ...state.error,
          user: null,
        },
      };
    case authenticationType.FETCH_USER_LIST_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          user: payload,
        },
      };
    case authenticationType.FETCH_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        adminList: [...[], ...payload],
        error: {
          ...state.error,
          admin: null,
        },
      };
    case authenticationType.FETCH_ADMIN_LIST_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          admin: payload,
        },
      };

    default:
      return state;
  }
};
