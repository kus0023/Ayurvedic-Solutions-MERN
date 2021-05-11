import axios from "axios";
import {
  GET_DISEASE_LIST,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from "../types/Disease.types";

/**
 *
 * @param {Number} page
 * @param {Number} limit
 * @returns populate the store with disease data with pagination
 */
export const getDiseases = (page, limit) => async (dispatch) => {
  dispatch(setItemsLoading());
  try {
    const res = await axios.get("api/disease?page=" + page + "&limit=" + limit);
    dispatch({
      type: GET_DISEASE_LIST,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setItemsLoaded());
  }
};

const setItemsLoading = () => {
  return { type: SET_LOADING_TRUE };
};

const setItemsLoaded = () => {
  return { type: SET_LOADING_FALSE };
};
