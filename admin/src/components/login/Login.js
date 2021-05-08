import React, { Component,useState } from "react";
import "./Login.css";
import { Redirect } from 'react-router-dom'


class Login extends Component {

  constructor(props){
    super(props)
    const token=localStorage.getItem("token")
    let loggedIn=true
    if(token==null){
      loggedIn=false
    }
    this.state={
      email:'',
      password:'',
      loggedIn,
      error:null
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.history.push("/admin/");
    const { email,password }=this.state
    if(email==="A@gmail.com" && password==="A"){
      localStorage.setItem("token","siocnaspoxcmohjvjbkllnl")
      this.setState({
        loggedIn:true
      })
    }
  };

  handleChange(e){
    
    
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  


  render() {
    if(this.state.loggedIn){
      return <Redirect to="/data" />
    }
    

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
                      <input id="email" type="text" class="validate" name="email"  value={this.state.email} onChange={this.handleChange} />
                      <label for="email">Email</label>
                    </div>

                    <div class="input-field col s12 m6 offset-m3">
                      <input id="password" type="password" class="validate" name="password" value={this.props.password} onChange={this.handleChange} />
                      <label for="password">Password</label>
                    </div>
                    <div class="input-field col s12 m6 offset-m3">
                      {this.state.error && <div className="error">{this.state.error}</div>}
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
