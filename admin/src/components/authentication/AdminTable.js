import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminList } from "../../redux/dashboard/AuthenticationAction";

function AdminTable() {
  const authenticationPage = useSelector((state) => state.authenticationPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdminList());
    return () => {};
  }, [dispatch]);

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
            authenticationPage.adminList.map((admin, i) => (
              <tr key={i}>
                <td>{admin._id}</td>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
                <td>{admin.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
