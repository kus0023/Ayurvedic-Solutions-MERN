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
        <div id="modal1" class="modal modal-fixed-footer">
          <div class="modal-content">
            <div className="right ">
              <i class="material-icons  modal-close">close</i>
            </div>
            <h4>Add New User</h4>
            <p></p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
            <button class="waves-effect waves-green btn green">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewUserModal;
