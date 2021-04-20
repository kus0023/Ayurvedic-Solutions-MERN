import React, { Component } from "react";

class UsersTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>UID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Eclair</td>
              <td>Eclair@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jellybean</td>
              <td>Jellybean@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jonathan</td>
              <td>Jonathan@gmail.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Marry</td>
              <td>marry@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
