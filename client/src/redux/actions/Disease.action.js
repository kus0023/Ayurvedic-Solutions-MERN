import axios from "axios";
import {
  GET_DISEASE_LIST,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  GET_ONE_DISEASE,
  GET_ONE_DISEASE_ERROR,
} from "../types/Disease.types";

const setItemsLoading = () => {
  return { type: SET_LOADING_TRUE };
};

const setItemsLoaded = () => {
  return { type: SET_LOADING_FALSE };
};

/**
 *
 * @param {Number} page
 * @param {Number} limit
 * @returns populate the store with disease data with pagination
 */
export const getDiseases = (page, limit) => async (dispatch) => {
  dispatch(setItemsLoading());
  try {
    const res = await axios.get(
      "/api/disease?page=" + page + "&limit=" + limit
    );
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

export const getDiseaseDetail = (diseaseId) => async (dispatch) => {
  dispatch(setItemsLoading());
  const url = "/api/disease/get?id=" + diseaseId;

  if (diseaseId) {
    try {
      const res = await axios.get(url);
      dispatch({ type: GET_ONE_DISEASE, payload: { ...res.data.disease } });
    } catch (e) {
      dispatch({
        type: GET_ONE_DISEASE_ERROR,
        payload: "SOMETHING WENT WRONG",
      });
    } finally {
      dispatch(setItemsLoaded());
    }
  }
};
