import React from "react";
import { Link } from "react-router-dom";

function LogedOutLinks() {
  return (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
}

export default LogedOutLinks;
