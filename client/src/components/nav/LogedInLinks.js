import React from "react";
import { Link } from "react-router-dom";

function LogedInLinks() {
  return (
    <>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/login">Logout</Link>
      </li>
    </>
  );
}

export default LogedInLinks;
