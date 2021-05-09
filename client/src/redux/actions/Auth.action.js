import axios from "axios";
import * as authType from "../types/Auth.types";

//dispatch creators

const setLoginLoading = (isLoading) => {
  if (isLoading) {
    return { type: authType.SET_LOGIN_LOADING_TRUE };
  } else {
    return { type: authType.SET_LOGIN_LOADING_FALSE };
  }
};

const setLoginSuccess = (user, token) => {
  localStorage.setItem("token", token);
  return { type: authType.LOGIN_SUCCESS, payload: user };
};

const setLoginFailure = (error) => {
  return { type: authType.LOGIN_FAILED_WITH_ERROR, payload: error };
};

const setRegisterLoading = (isLoading) => {
  if (isLoading) {
    return { type: authType.SET_REGISTER_LOADING_TRUE };
  } else {
    return { type: authType.SET_REGISTER_LOADING_FALSE };
  }
};

const setRegisterSuccess = () => {
  return { type: authType.REGISTER_SUCCESS };
};

const setRegisterFailure = (error) => {
  return { type: authType.REGISTER_FAILED_WITH_ERROR, payload: error };
};

const setIsReady = (isReady) => {
  if (isReady) {
    return { type: authType.SET_READY_TRUE };
  } else {
    return { type: authType.SET_READY_FALSE };
  }
};

const setUser = (user) => {
  return { type: authType.SET_USER, payload: user };
};

const setLogoutLoading = (isLoading) => {
  if (isLoading) {
    return { type: authType.SET_LOGOUT_LOADING_TRUE };
  } else {
    return { type: authType.SET_LOGOUT_LOADING_FALSE };
  }
};

/*************************************ACTIONS************************************************/

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoginLoading(true));
  try {
    const data = { email, password };
    const res = await axios.post("api/user/login", data);

    const { user, token } = res.data;
    dispatch(setLoginSuccess(user, token));
  } catch (error) {
    const message =
      error.response.data.message || "Invalid Credentials (LOCAL)";
    dispatch(setLoginFailure(message));
  } finally {
    dispatch(setLoginLoading(false));
  }
};

export const registerUser = (user) => async (dispatch) => {
  dispatch(setRegisterLoading(true));

  try {
    const res = await axios.post("api/user/register", user);

    console.log(res.data);

    dispatch(setRegisterSuccess());
  } catch (error) {
    const message = error.response.data.message;
    console.log(message);
    dispatch(setRegisterFailure(message));
  } finally {
    dispatch(setRegisterLoading(false));
  }
};

export const getAuth = () => async (dispatch) => {
  //Get the token
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  //verify the token
  //   await axios
  //     .get("api/user/getAuth", config)
  //     .then(res => )
  //     .catch(err => console.error(err));
  try {
    const res = await axios.get("api/user/getAuth", config);

    const { user } = res.data;
    dispatch(setUser(user));
  } catch (e) {
    console.log(e.response.data);
    dispatch(setUser(null));
  } finally {
    dispatch(setIsReady(true));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setLogoutLoading(true));

  //get the token
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const res = await axios.get("api/user/logout", config);
    console.log(res.data);
    //remove from local storage
    localStorage.removeItem("token");
    //user set to null
    dispatch({ type: authType.LOGOUT });
  } catch (e) {
    console.log(e.response.data);
  } finally {
    dispatch(setLogoutLoading(false));
  }
};
