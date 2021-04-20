import React, { Component } from "react";
import AdminTable from "./AdminTable";
import UsersTable from "./UsersTable";

export default class Auth extends Component {
  componentDidMount() {
    const M = window.M;
    const el = document.querySelector(".tabs");
    M.Tabs.init(el, { swipeable: true });
    const instance = M.Tabs.getInstance(el);
    instance.select("test-swipe-1");
  }
  render() {
    return (
      <div className="container" style={{ marginTop: 40 }}>
        <ul id="tabs-swipe-demo" class="tabs z-depth-1">
          <li class="tab col s3">
            <a href="#test-swipe-1" className="active">
              Users
            </a>
          </li>
          <li class="tab col s3">
            <a class="" href="#test-swipe-2">
              Admins
            </a>
          </li>
        </ul>
        <div id="test-swipe-1" class="col s12 ">
          <UsersTable />
        </div>
        <div id="test-swipe-2" class="col s12 red accent-1">
          <AdminTable />
        </div>
      </div>
    );
  }
}
