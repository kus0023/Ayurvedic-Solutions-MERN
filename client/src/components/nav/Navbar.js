import React from "react";
import AlwaysShowLinks from "./AlwaysShowLinks";
import LogedInLinks from "./LogedInLinks";
import LogedOutLinks from "./LogedOutLinks";
import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinearLoader from "../loader/LinearLoader";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const { user, logout } = auth;
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            HerboFit
          </a>
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <AlwaysShowLinks />
            {user ? <LogedInLinks /> : <LogedOutLinks />}
            {user && (
              <Link
                to="/"
                className="btn-floating btn waves-effect waves-light red"
              >{`${user.firstName[0]}${user.lastName[0]}`}</Link>
            )}
          </ul>
        </div>
      </nav>
      {logout.isLoading && <LinearLoader />}
      <Sidebar />
    </div>
  );
}

export default Navbar;
