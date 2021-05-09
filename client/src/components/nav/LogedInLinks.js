import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/Auth.action";

function LogedInLinks() {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <a
          href="#!"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </a>
      </li>
    </>
  );
}

export default LogedInLinks;
