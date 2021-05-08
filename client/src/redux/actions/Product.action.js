import axios from "axios";
import {
  GET_PRODUCT_LIST,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from "../types/Product.types";

/**
 *
 * @param {Number} page
 * @param {Number} limit
 * @returns populate the store with product data with pagination
 */
export const getProducts = (page, limit) => async (dispatch) => {
  dispatch(setItemsLoading());
  try {
    const res = await axios.get(
      "api/products?page=" + page + "&limit=" + limit
    );
    dispatch({
      type: GET_PRODUCT_LIST,
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
