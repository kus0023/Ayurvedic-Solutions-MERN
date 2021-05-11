import React, { Component } from "react";
import AdminTable from "./AdminTable";
import UsersTable from "./UsersTable";
import "./Auth.css";
import AddNewUserModal from "../Modals/AddNewUserModal";
import { Redirect } from "react-router-dom";

export default class Auth extends Component {

  constructor(props){
    super(props)
    const token=localStorage.getItem("token")
    
    let loggedIn=true
    if(token==null){
      
      loggedIn=false
    }

    this.state={
      loggedIn
    }
  }


  componentDidMount() {
    const M = window.M;
    const el = document.querySelector(".tabs");
    M.Tabs.init(el, { swipeable: true });
    // const instance = M.Tabs.getInstance(el);
    // instance.select("test-swipe-1");
  }

  render() {
    if(this.state.loggedIn===false){
      return <Redirect to="/"/>
    }
    return (
      <>
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

{/*------------------------------------ Modal Structure ---------------------------  */}
               <div id="modal1" class="modal">
                  <div class="modal-content">
                    <h4>ADD Details</h4>
                    <div class="row">
                      <form class="col s12">
                        <div class="row">
                          <div class="input-field col s12">
                              <input id="email" type="email" class="validate"/>
                              <label for="email">Email</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                              <input id="password" type="password" class="validate"/>
                              <label for="password">password</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                          <select class="browser-default">
                            <option value="" disabled selected>Add value in</option>
                            <option value="1">Client side</option>
                            <option value="2">Admin side</option>
                          </select>
                          </div>
                        </div>
                      </form>
                  </div>
                <div class="modal-footer">
                  <button href="#!" class="modal-close waves-effect waves-green  btn-flat">Close</button>
                  <button href="#!" class="modal-close waves-effect waves-green green btn-small">Add</button>
    </div>
  </div>
  </div>
{/* ================================================================================================================== */}
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
