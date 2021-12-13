import React, { useContext, useRef } from  'react'
import "./Login.css"
import login from '../images/login.png'
import { Context } from '../context/Context';
import axios from 'axios';

function Login(){

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
  
    return(
    <section className="login">
        <div className="row">
            <div className="col-md-6">
                <img src={login} class="img-fluid shadow-1-strong" alt="xycoders" />
            </div>
            <div className="col-md-6">
                
                <div className="Login__content">
                    <div className="sign-page">
                    <h1>Log in</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                                <input type="text" id="form5Example1" class="form-control" 
                                    ref={userRef}
                                />
                                <label class="form-label" for="form5Example1">username</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password"  class="form-control" 
                                    ref={passwordRef}
                                />
                                <label class="form-label" for="form5Example2">Password</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block mb-4 loginback " disabled={isFetching}>Log In</button>
                    </form>
                        <a href="/password">Forgot your password</a>
                        <hr/>
                        <div id="logreg-forms">
                            <div class="social-login">
                                <button class="btn facebook-btn social-btn btn-block" type="button"><span> <i class="fab fa-facebook-f"> </i>  Sign in with Facebook</span> </button>
                                <button class="btn google-btn social-btn btn-block" type="button"><span> <i class="fab fa-google-plus-g"></i>  Sign in with Google+</span> </button>
                            </div>
                        </div>
                        <a href="/Register">Don't have account? Signup for free</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;