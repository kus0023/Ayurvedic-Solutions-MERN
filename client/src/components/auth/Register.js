import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/actions/Auth.action";
import { useDispatch, useSelector } from "react-redux";
import LinearLoader from "../loader/LinearLoader";
import { successMessage } from "../../utils/messages/ToastMessages";

function Register() {
  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  const onSubmit = async (data) => {
    await dispatch(registerUser(data));

    if (auth.register.error == null) {
      successMessage("Successfully Registered");
      history.push("/login");
    }
  };

  if (auth.user) {
    history.goBack();
  }

  return (
    <div className="register">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card section">
            {auth.register.isLoading && <LinearLoader />}
            <CSSTransition
              appear={true}
              in={true}
              timeout={1000}
              classNames="title"
            >
              <h4 className="section center">Register</h4>
            </CSSTransition>

            {auth.register.error && (
              <div className=" center red white-text" style={{ padding: 10 }}>
                <b>{auth.register.error}</b>
              </div>
            )}

            <div className="divider"></div>

            <CSSTransition
              appear={true}
              in={true}
              timeout={1000}
              classNames="form"
            >
              <form
                className="section container"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="input-field col s12 m6 offset-m3">
                    <input
                      id="firstName"
                      type="text"
                      maxLength="25"
                      minLength="1"
                      className="validate"
                      {...register("firstName")}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="input-field col s12 m6 offset-m3">
                    <input
                      id="lastName"
                      type="text"
                      maxLength="25"
                      minLength="1"
                      className="validate"
                      {...register("lastName")}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>

                  <div className="input-field col s12 m6 offset-m3">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      {...register("email")}
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-field col s12 m6 offset-m3">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      {...register("password")}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m6 offset-m3">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn-small green right"
                      disabled={auth.register.isLoading}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </CSSTransition>
            <CSSTransition
              appear={true}
              in={true}
              timeout={1000}
              classNames="link"
            >
              <div className="row center">
                <div className="col s12 m6 offset-m3">
                  Already have an Account?<Link to="/login"> Login</Link>
                  <div className="divider"></div>
                  Go Back To <Link to="/">Home</Link>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
