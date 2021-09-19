import React from 'react'
import "./Login.css"
import signup from "../images/signup.png"

function Register(){
    return(
        <section className="login">
        <div className="row">
            <div className="col-md-6">
            <div className="signupimage">
               <img src={signup} class="img-fluid shadow-2-strong" alt="xycoders" />
            </div>
            </div>
            <div className="col-md-6">
                
                <div className="Login__content">
                    <div className="sign-page">
                    <h1>Sign up</h1>
                    <br/>
                    <form>
                    <div class="form-outline mb-4">
                            <input type="text" id="form5Example1" class="form-control" />
                            <label class="form-label" for="form5Example1">Full Names</label>
                    </div>
                    <div class="form-outline mb-4">
                            <input type="text" id="form5Example1" class="form-control" />
                            <label class="form-label" for="form5Example1">Username</label>
                    </div>
                    <div class="form-outline mb-4">
                            <input type="email" id="form5Example1" class="form-control" />
                            <label class="form-label" for="form5Example1">Email</label>
                    </div>
                        <div class="form-outline mb-4">
                            <input type="password"  class="form-control" />
                            <label class="form-label" for="form5Example2">Password</label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
                        </form>
                        <hr/>
                        <div id="logreg-forms">
                            <div class="social-login">
                                <button class="btn facebook-btn social-btn btn-block" type="button"><span> <i class="fab fa-facebook-f"> </i>  Sign up with Facebook</span> </button>
                                <button class="btn google-btn social-btn btn-block" type="button"><span> <i class="fab fa-google-plus-g"></i>  Sign up with Google+</span> </button>
                            </div>
                        </div>
                        <a href="/login">Signin for free</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Register;