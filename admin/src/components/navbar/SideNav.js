import React, { useEffect } from "react";

function SideNav() {
  useEffect(() => {
    const M = window.M;
    const elems = document.querySelectorAll(".sidenav");
    const instances = M.Sidenav.init(elems, {});
  }, []);
  return (
    <div>
      <ul id="slide-out" className="sidenav">
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
          <a href="#!">
            <i className="material-icons">lock</i>Athentication
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">category</i>Products
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
