import React from 'react'
import './Header.css'
import reb from '../images/reb.png'
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <section className="head">
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">

                <h2>We are passionate for development of <span>scalable
                    applications.</span></h2>
                    {/* <h5>Expert in devising innovative and tailored enterprise solutions
                    and problem solving to assist businesses achieve their goals in a variety of
                    industries.</h5> */}
                    <p>Excels in every stage of the life cycle of software development,
                    including design creation, coding, debugging, testing, and maintenance using
                    industry best practices.</p>
                    <br/>
                    <Link to="/Hire" class="btn btn--orange">Hire Developer</Link>
                    
                    <Link to="/Profile"  class="btn btn--orange_signup">portfolio</Link>

                </div>
                <div className="col-md-6">
                    <img src={reb} alt="xycoders" />
               </div>
        </div>
        </div>
        </section>
    )
}