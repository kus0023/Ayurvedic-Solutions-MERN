import React from "react";
import AlwaysShowLinks from "./AlwaysShowLinks";
import LogedInLinks from "./LogedInLinks";
import LogedOutLinks from "./LogedOutLinks";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <LogedOutLinks />
            <LogedInLinks />
            <AlwaysShowLinks />
          </ul>
        </div>
      </nav>

      <Sidebar />
    </div>
  );
}

export default Navbar;
