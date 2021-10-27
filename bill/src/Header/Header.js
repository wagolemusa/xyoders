import React from 'react'
import './Header.css'
import xycodedr from '../images/xycodedr.jpg';
import xy1 from '../images/xy1.jpg'
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <section className="head">
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">

                <h2>We are passionate for development of scalable
                    applications.</h2>
                    <h5>Expert in devising innovative and tailored enterprise solutions
                    and problem solving to assist businesses achieve their goals in a variety of
                    industries.</h5>
                    <p>Excels in every stage of the life cycle of software development,
                    including design creation, coding, debugging, testing, and maintenance using
                    industry best practices.</p>
                    <br/>
                    <Link to="/Hire" class="btn btn--orange">Hire Developer</Link>
                    
                    <a href="/signup"  class="btn btn--orange_signup">Sign-up</a>

                </div>
                <div className="col-md-6">
                    <img src={xycodedr} alt="xycoders" />
               </div>
        </div>
        </div>
        </section>
    )
}