import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

import { useForm } from "react-hook-form";
import { login } from "../../redux/actions/Auth.action";
import { useDispatch, useSelector } from "react-redux";
import LinearLoader from "../loader/LinearLoader";

function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(login(email, password));
  };

  if (auth.user) {
    history.push("/");
  }

  return (
    <div className="login">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card ">
            {auth.login.isLoading && <LinearLoader />}
            <div className="section">
              <CSSTransition
                appear={true}
                in={true}
                timeout={600}
                classNames="title"
              >
                <div>
                  <h4 className="section center">Login</h4>
                </div>
              </CSSTransition>
              {auth.login.error && (
                <div className=" center red white-text" style={{ padding: 10 }}>
                  <b>{auth.login.error}</b>
                </div>
              )}

              <div className="divider"></div>

              <CSSTransition
                appear={true}
                in={true}
                timeout={600}
                classNames="form"
              >
                <form
                  className="section container"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        required
                        {...register("email")}
                      />
                      <label htmlFor="email">Email</label>
                      <span
                        className="helper-text"
                        data-error="wrong"
                        data-success="Correct"
                      >
                        Enter Email
                      </span>
                    </div>

                    <div className="input-field col s12 m6 offset-m3">
                      <input
                        autoComplete="false"
                        id="password"
                        type="password"
                        className="validate"
                        required
                        {...register("password", { min: 8, required: true })}
                      />
                      <label htmlFor="password">Password</label>

                      <span
                        className="helper-text"
                        data-error="too short (min: 8)"
                        data-success="Good"
                      >
                        Enter Password
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 offset-m3">
                      <button
                        type="submit"
                        className="waves-effect waves-light btn-small green right"
                        disabled={auth.login.isLoading}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </CSSTransition>
              <CSSTransition
                appear={true}
                in={true}
                classNames="link"
                timeout={1000}
              >
                <div className="row center">
                  <div className="col s12 m6 offset-m3">
                    Don't have an Account?<Link to="/register"> Register</Link>
                    <div className="divider"></div>
                    Go Back To <Link to="/">Home</Link>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
