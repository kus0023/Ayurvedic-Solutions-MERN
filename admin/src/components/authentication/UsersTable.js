import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../redux/dashboard/AuthenticationAction";

function UsersTable() {
  const authenticationPage = useSelector((state) => state.authenticationPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
    return () => {};
  }, [dispatch]);

  console.log(authenticationPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {authenticationPage.isloading ? (
            <h1>Loading...</h1>
          ) : (
            authenticationPage.userList.map((user, i) => (
              <tr key={i}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
