import React, { useEffect } from "react";
import "./Login.css";
import { useHistory } from 'react-router-dom'
import { getAuth, login } from "../../redux/index";
import { useDispatch,useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Login() {

  const {
    register,
    handleSubmit,
  } = useForm();

  const dispatch=useDispatch();
  const auth=useSelector((state) => state.auth);
  const history=useHistory();

  useEffect(() => {
        dispatch(getAuth())
    return () => {
    }
  }, [dispatch])

  

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data)
    dispatch(login(email, password));
  };
console.log(auth.user);

  if (auth.user) {
    history.push('/');
  }
  
    return (
      <div className="login">
        <div className="container">
          <div class="row">
            <div className="col s12 m6 offset-m3">
              <div className="card medium">
                <h4 class="section center">Login</h4>
                <div class="divider"></div>

                <form className="section" onSubmit={handleSubmit(onSubmit)}>
                  <div class="row">
                    <div class="input-field col s12 m6 offset-m3">
                      <input id="email" type="email" className="validate" required {...register("email")}   />
                      <label htmlFor="email">Email</label>
                    </div>

                    <div class="input-field col s12 m6 offset-m3">
                      <input id="password" type="password" className="validate" required {...register("password",{min:8,required:true})} />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div class="input-field col s12 m6 offset-m3">
                    {auth.login.error && (
                <div className=" center red white-text" style={{ padding: 10 }}>
                  <b>{auth.login.error}</b>
                </div>
              )}
                    </div>

                  </div>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Login;
