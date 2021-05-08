import React from "react";
import AlwaysShowLinks from "./AlwaysShowLinks";
import LogedInLinks from "./LogedInLinks";
import LogedOutLinks from "./LogedOutLinks";

const M = window.M;

class Sidebar extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  componentWillUnmount() {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.getInstance(elem);
    instance.destroy();
  }
  render() {
    return (
      <>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img
                  src="https://materializecss.com/images/office.jpg"
                  alt=""
                />
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
          <LogedInLinks />
          <LogedOutLinks />
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a href="#!" className="subheader">
              Visit
            </a>
          </li>
          <AlwaysShowLinks />
          <li>
            <div className="divider"></div>
          </li>
          <li>
            {/*  eslint-disable-next-line */}
            <a className="subheader" href="#!"></a>
          </li>

          <li>
            <a className="sidenav-close center valign-wrapper" href="#!">
              <div>
                <i
                  style={{ padding: 10 }}
                  className="material-icons circle z-depth-1-half"
                >
                  close
                </i>
              </div>
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Sidebar;
