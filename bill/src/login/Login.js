import React from  'react'
import "./Login.css"
import login from '../images/login.png'

function Login(){
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
                    <form>
                    <div class="form-outline mb-4">
                            <input type="email" id="form5Example1" class="form-control" />
                            <label class="form-label" for="form5Example1">Email</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="password"  class="form-control" />
                            <label class="form-label" for="form5Example2">Password</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-4">Log In</button>
                        </form>
                        <a href="#">Forgot your password</a>
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