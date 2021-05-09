import axios from "axios";
import * as authType from "../types/Auth.types";

//dispatch creators

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

//action creator

export const getAuth = () => async (dispatch) => {
  //Get the token
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  //verify the token
  try {
    const res = await axios.get("api/user/getAuth", config);
    const { user } = res.data;
    dispatch(setUser(user));
  } catch (e) {
    console.log(e.status);
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
    console.log(e);
  } finally {
    dispatch(setLogoutLoading(true));
  }
};
