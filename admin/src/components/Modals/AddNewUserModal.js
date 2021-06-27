import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { addUser } from "../../redux/dashboard/AuthenticationAction";

function AddNewUserModal() {
  // const isLoading = useSelector((state) => state.authenticationPage);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isAdmin: "false",
    },
  });

  let instance = useRef(null);
  useEffect(() => {
    const M = window.M;
    var elem = document.querySelector(".modal");
    instance.current = M.Modal.init(elem, { dismissible: false });

    return () => {
      instance.destroy();
    };
  }, [instance]);

  const onAddNewUser = (data) => {
    data.isAdmin = data.isAdmin === "true" ? true : false;

    console.log(data);

    dispatch(addUser(data));
    reset({}, { keepDefaultValues: true });
    instance.close();
  };

  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4 className="center">Add User</h4>
          <div className="divider" />

          <form onSubmit={handleSubmit(onAddNewUser)} className="container">
            <div className="row">
              <div className="col s12 m6 input-field">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  {...register("firstName", { required: true })}
                />
                <label for="firstName">First Name</label>
              </div>

              <div className="col s12 m6 input-field">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  {...register("lastName", { required: true })}
                />
                <label for="lastName">Last Name</label>
              </div>
            </div>

            <div className="row">
              <p className="col s12 m6">Account Type: </p>
              <p className="col s12 m3">
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    value={false}
                    type="radio"
                    {...register("isAdmin")}
                  />
                  <span>Client</span>
                </label>
              </p>
              <p className="col s12 m3">
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    value={true}
                    type="radio"
                    {...register("isAdmin")}
                  />
                  <span>Admin</span>
                </label>
              </p>
            </div>

            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  {...register("email", { required: true })}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  {...register("password", { required: true })}
                />
                <label for="password">Password</label>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-close waves-effect waves-green  btn-flat">
                Close
              </button>
              <button
                className="waves-effect waves-green green btn-small"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewUserModal;
