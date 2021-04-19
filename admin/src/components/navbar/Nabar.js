import React from "react";
import SideNav from "./SideNav";

function Nabar() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
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
