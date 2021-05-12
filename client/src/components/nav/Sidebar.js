import React from "react";
import { connect } from "react-redux";
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
    const { user } = this.props;
    return (
      <>
        <ul id="slide-out" className="sidenav orange lighten-5 sidenav-close">
          {user && (
            <li>
              <div className="user-view">
                <div className="background  orange darken-4"></div>
                <a href="#user">
                  <img
                    className="circle"
                    src="https://materializecss.com/images/yuna.jpg"
                    alt=""
                  />
                </a>
                <a href="#name">
                  <span className="white-text name">{`${user.firstName} ${user.lastName}`}</span>
                </a>
                <a href="#email">
                  <span className="white-text email">{user.email}</span>
                </a>
              </div>
            </li>
          )}
          {user ? <LogedInLinks /> : <LogedOutLinks />}

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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
