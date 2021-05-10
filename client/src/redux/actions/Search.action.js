import axios from "axios";
import * as searchTypes from "../types/Search.types";

//dispatch creators
const setLoading = (isLoading) => {
  if (isLoading) {
    return { type: searchTypes.SET_LOADING_TRUE };
  } else {
    return { type: searchTypes.SET_LOADING_FALSE };
  }
};

const setData = (data) => {
  return { type: searchTypes.FETCH_DATA_SUCCESS, payload: data };
};

/*****************************Actions********************************/

export const fetchData = (type, query) => async (dispatch, getState) => {
  dispatch(changeType(type));
  // eslint-disable-next-line
  if (query !== "") {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`/api/search/${type}?search=${query}`);

      dispatch(setData(res.data.result));
    } catch (err) {
      console.log(err.response?.data || err.message);
    } finally {
      dispatch(setLoading(false));
    }
  } else {
    console.log("else working");
    dispatch({ type: searchTypes.FETCH_DATA_FAILURE });
  }
};

export const changeType = (type) => {
  if (type === "product") {
    return { type: searchTypes.CHANGE_TYPE_PRODUCT };
  } else if (type === "disease") {
    return { type: searchTypes.CHANGE_TYPE_DISEASE };
  }
};
