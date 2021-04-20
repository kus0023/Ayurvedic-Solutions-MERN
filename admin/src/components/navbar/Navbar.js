import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function Navbar() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="green">
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">
              Admin-HerboFit
            </a>
            <ul id="nav-mobile" className="right ">
              <li>
                <Link to="/admin/login">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <SideNav />
    </div>
  );
}

export default Navbar;
