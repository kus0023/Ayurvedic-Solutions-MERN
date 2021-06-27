import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  useEffect(() => {
    const M = window.M;
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});

    return () => {
      const elem = document.querySelectorAll(".sidenav")[0];
      var instance = M.Sidenav.getInstance(elem);
      instance.destroy();
    };
  }, []);

  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-close">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://materializecss.com/images/office.jpg" alt="" />
            </div>
            <a href="#user">
              <img
                className="circle"
                src="https://materializecss.com/images/yuna.jpg"
                alt=""
              />
            </a>
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <Link to="/">
            <i className="material-icons">lock</i>Athentication
          </Link>
        </li>
        <li>
          <Link to="/products">
            <i className="material-icons">category</i>Products
          </Link>
        </li>
        <li>
          <Link to="/diseases">
            <i className="material-icons">volunteer_activism</i>Diseases
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
