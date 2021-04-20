import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/admin/");
  };
  render() {
    return (
      <div className="login">
        <div className="container">
          <div class="row">
            <div className="col s12 m6 offset-m3">
              <div className="card medium">
                <h4 class="section center">Login</h4>
                <div class="divider"></div>

                <form className="section" onSubmit={this.handleSubmit}>
                  <div class="row">
                    <div class="input-field col s12 m6 offset-m3">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>

                    <div class="input-field col s12 m6 offset-m3">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <button
                        type="submit"
                        className="waves-effect waves-light btn-small green right"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
