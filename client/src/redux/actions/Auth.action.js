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
    console.log(e.e.status);
    dispatch(setUser(null));
  } finally {
    dispatch(setIsReady(true));
  }
};
