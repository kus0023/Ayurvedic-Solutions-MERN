import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card medium">
              <CSSTransition
                appear={true}
                in={true}
                timeout={600}
                classNames="title"
              >
                <h4 className="section center">Login</h4>
              </CSSTransition>

              <div className="divider"></div>

              <CSSTransition
                appear={true}
                in={true}
                timeout={600}
                classNames="form"
              >
                <form className="section" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-field col s12 m6 offset-m3">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 offset-m3">
                      <button
                        type="submit"
                        className="waves-effect waves-light btn-small green right"
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
                <div className="row">
                  <div className="col s12 m6 offset-m3">
                    Don't have an Account?<Link to="/register"> Register</Link>
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
