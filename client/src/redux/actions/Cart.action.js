import axios from "axios";
import {
  errorMessage,
  successMessage,
} from "../../utils/messages/ToastMessages";
import * as cartTypes from "../types/Cart.types";

const setItemsLoading = (isLoading) => {
  if (isLoading) {
    return { type: cartTypes.SET_CART_LOADING_TRUE };
  }
  return { type: cartTypes.SET_CART_LOADING_FALSE };
};

function setError(error) {
  if (typeof error === "string") {
    return { type: cartTypes.FETCH_CART_LIST_FAIL, payload: error };
  } else {
    return {
      type: cartTypes.FETCH_CART_LIST_FAIL,
      payload: "UNEXPECTED ERROR",
    };
  }
}

function setItemList(list) {
  if (Array.isArray(list))
    return { type: cartTypes.FETCH_CART_LIST_SUCCESS, payload: list };
  else setError("List is not in correct format.");
}

// ===============================ACTIONS==================================

export const fetchCartItems = () => (dispatch) => {
  dispatch(setItemsLoading(true));
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  axios
    .get("/api/user/cart/get", config)
    .then((res) => {
      dispatch(setItemList(res.data.cart));
    })
    .catch((error) => {
      console.log(error, error.response);
      errorMessage("Something went worng.", 4000);
    })
    .finally(() => {
      dispatch(setItemsLoading(false));
    });
};

export const addCartItem = (productId) => async (dispatch) => {
  dispatch(setItemsLoading(true));

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const data = {
    productId,
  };

  try {
    await axios.post("/api/cart/add", data, config);
    dispatch(fetchCartItems());
    successMessage("Item Added", 5000);
  } catch (e) {
    console.log(e.response?.data?.message || e.response?.data || e);
  }
};

export const deleteCartItem = (cartId) => (dispatch) => {
  dispatch(setItemsLoading(true));
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      cartId,
    },
  };
  axios
    .delete("/api/user/cart/delete", config)
    .then((res) => {
      dispatch(fetchCartItems());
    })
    .catch((e) => {
      console.log(e, e.response?.data);
    })
    .finally(() => {
      dispatch(setItemsLoading(false));
    });
};
