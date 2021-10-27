import React, { useState } from 'react'
import "./Login.css"
import signup from "../images/signup.png"
import axios from 'axios'

function Register(){
    const [fullname, setFullname ] = useState("")
    const [username, setUsername ] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
        try{
            
            const res = await axios.post("/auth/register",{
                fullname,
                username,
                email,
                password
            });
            res.data && window.location.replace("/login")
        }catch (err){
            setError(true);
        };    
    }

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
                    {error && <p style={{ color:"red", fontSize: "20px"}}>Samething went wrong!</p> }
                    <br/>
                    <form onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                            <input type="text" id="form5Example1" class="form-control" placeholder="Full Name"
                            onChange={e=>setFullname(e.target.value)}
                            />
                    </div>
                    <div class="form-outline mb-4">
                            <input type="text" id="form5Example1" class="form-control" placeholder="Username"
                            onChange={e=>setUsername(e.target.value)}
                            />
                    </div>
                    <div class="form-outline mb-4">
                            <input type="email" id="form5Example1" class="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                            />
                    </div>
                        <div class="form-outline mb-4">
                            <input type="password"  class="form-control" placeholder="Password"
                            onChange={e=>setPassword(e.target.value)}
                            />
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