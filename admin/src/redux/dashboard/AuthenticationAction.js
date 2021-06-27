import axios from "axios";
import * as authenticationType from "./AuthenticationType";

function setLoading(isLoading) {
  return {
    type: isLoading
      ? authenticationType.SET_LOADING_TRUE
      : authenticationType.SET_LOADING_FALSE,
  };
}

function setUserList(list) {
  return { type: authenticationType.FETCH_USER_LIST_SUCCESS, payload: list };
}

function setUserListError(error) {
  if (typeof error === "string") {
    return { type: authenticationType.FETCH_USER_LIST_FAILURE, payload: error };
  } else {
    return {
      type: authenticationType.FETCH_USER_LIST_FAILURE,
      payload: "USER LIST FETCH ERROR",
    };
  }
}

function setAdminList(list) {
  return { type: authenticationType.FETCH_ADMIN_LIST_SUCCESS, payload: list };
}
function setAdminListError(error) {
  if (typeof error === "string") {
    return {
      type: authenticationType.FETCH_ADMIN_LIST_FAILURE,
      payload: error,
    };
  } else {
    return {
      type: authenticationType.FETCH_ADMIN_LIST_FAILURE,
      payload: "USER LIST FETCH ERROR",
    };
  }
}

//=================================Actions===========================
export const fetchAdminList = () => (dispatch) => {
  dispatch(setLoading(true));
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // console.log(config.headers.Authorization);
  axios
    .get("/api/admin/admins", config)

    .then((res) => {
      // console.log(res.data);
      dispatch(setAdminList(res.data.admins));
    })
    .catch((err) => {
      console.error(err.response);
      dispatch(
        setAdminListError(
          err.message || err.response?.data?.message || "USER FETCH ERROR"
        )
      );
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const fetchUserList = () => (dispatch) => {
  dispatch(setLoading(true));
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // console.log(config.headers.Authorization);
  axios
    .get("/api/admin/users", config)

    .then((res) => {
      // console.log(res.data);
      dispatch(setUserList(res.data.users));
    })
    .catch((err) => {
      // console.error(err.response);
      dispatch(
        setUserListError(
          err.message || err.response?.data?.message || "USER FETCH ERROR"
        )
      );
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const addUser = (user) => async (dispatch) => {
  dispatch(setLoading(true));

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    await axios.post("/api/admin/register", user, config);
    // console.log("ADDING USER DATA ==>", res.data);
    window.M.toast({ html: "User added", classes: "green", duration: 10000 });
    dispatch(user.isAdmin ? fetchAdminList() : fetchUserList());
  } catch (e) {
    // console.log(e.response?.data || e.message || e);
    window.M.toast({
      html: "Adding user failed",
      classes: "red",
      duration: 10000,
    });
  } finally {
    dispatch(setLoading(false));
  }
};
