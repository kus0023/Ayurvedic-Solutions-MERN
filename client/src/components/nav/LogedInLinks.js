import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/Auth.action";
import { successMessage } from "../../utils/messages/ToastMessages";

function LogedInLinks() {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link
          to=""
          onClick={() => {
            successMessage("Logged Out");
            dispatch(logout());
          }}
        >
          Logout
        </Link>
      </li>
    </>
  );
}

export default LogedInLinks;
