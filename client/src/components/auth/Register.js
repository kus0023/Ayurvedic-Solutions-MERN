import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card medium">
              <CSSTransition timeout={200} classNames="title">
                <h4 className="section center">Register</h4>
              </CSSTransition>

              <div className="divider"></div>

              <form className="section" onSubmit={handleSubmit}>
                <div className="row">
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
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <div className="row">
                <div className="col s12 m6 offset-m3">
                  Already have an Account?<Link to="/login"> Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
