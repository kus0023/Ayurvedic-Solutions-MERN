import React from "react";
import SideNav from "./SideNav";

function Nabar() {
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
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <SideNav />
    </div>
  );
}

export default Nabar;
