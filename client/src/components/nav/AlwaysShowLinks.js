import React from "react";
import { Link } from "react-router-dom";

function AlwaysShowLinks() {
  return (
    <>
      <li>
        <Link to="/product">Products</Link>
      </li>
      <li>
        <Link to="/disease">Diseases</Link>
      </li>
    </>
  );
}

export default AlwaysShowLinks;
