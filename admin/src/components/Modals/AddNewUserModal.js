import React, { Component } from "react";

class AddNewUserModal extends Component {
  componentDidMount() {
    const M = window.M;
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, { dismissible: false });
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default AddNewUserModal;
