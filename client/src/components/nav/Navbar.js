import React from "react";
import LogedInLinks from "./LogedInLinks";
import LogedOutLinks from "./LogedOutLinks";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <LogedOutLinks />
            <LogedInLinks />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
