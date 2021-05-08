import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card section">
            <CSSTransition
              appear={true}
              in={true}
              timeout={1000}
              classNames="title"
            >
              <h4 className="section center">Register</h4>
            </CSSTransition>

            <div className="divider"></div>

            <CSSTransition
              appear={true}
              in={true}
              timeout={1000}
              classNames="form"
            >
              <form className="section container" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12 m6 offset-m3">
                    <input
                      id="firstName"
                      type="text"
                      maxLength="25"
                      minLength="1"
                      className="validate"
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
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>

                  <div className="input-field col s12 m6 offset-m3">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-field col s12 m6 offset-m3">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m6 offset-m3">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn-small green right"
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
