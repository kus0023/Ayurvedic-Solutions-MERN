import React, { Component } from "react";

class AdminTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>UID</th>
              <th>Admin Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Utsav</td>
              <td>utsav@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Shweta</td>
              <td>shweta@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminTable;
