import React, { Component } from "react";
import AdminTable from "./AdminTable";
import UsersTable from "./UsersTable";
import Navbar from "../navbar/Navbar";
import "./Auth.css";
import AddNewUserModal from "../Modals/AddNewUserModal";

export default class Auth extends Component {
  componentDidMount() {
    const M = window.M;
    const el = document.querySelector(".tabs");
    M.Tabs.init(el, { swipeable: true });
    // const instance = M.Tabs.getInstance(el);
    // instance.select("test-swipe-1");
  }

  render() {
    return (
      <>
        <Navbar />

        <div
          className="container"
          // style={{ marginTop: 40, border: "1px grey solid" }}
        >
          <ul id="tabs-swipe-demo" className="tabs z-depth-1">
            <li className="tab col s3 ">
              <a href="#test-swipe-1" className="active">
                Users
              </a>
            </li>
            <li className="tab col s3">
              <a href="#test-swipe-2" className="">
                Admins
              </a>
            </li>
            <li className="tab col s3 right">
              <button
                target="_blank"
                className="btn-flat waves-effect waves-yellow modal-trigger"
                data-target="modal1"
              >
                Add
              </button>
            </li>
          </ul>
          <div id="test-swipe-1" className="col s12 ">
            <UsersTable />
          </div>
          <div id="test-swipe-2" className="col s12 ">
            <AdminTable />
          </div>
        </div>

        <AddNewUserModal />
      </>
    );
  }
}
