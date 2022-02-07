import React from 'react'
import Typical from 'react-typical'
import About from './About';
import Footer from './Footer';
import './Portfolio.css'
import Resume from './Resume';
import { Link } from "react-router-dom";
import Projects from './Projects';

function Profile() {
    return (
       <>
      
        <div className="home-container">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                <div className="colz">
                        <div className="colz-icon">
                            <a href="https://web.facebook.com/wagole.musa/" target="_blank" rel='noopener noreferrer'>
                                <i class="fab fa-facebook"></i>
                            </a>

                            <a href="https://github.com/wagolemusa" target="_blank" rel='noopener noreferrer'>
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://web.telegram.org/z/#-383310540" target="_blank" rel='noopener noreferrer'>
                                <i class="fab fa-telegram"></i>
                            </a>
                            <a href="https://twitter.com/refugewize" target="_blank" rel='noopener noreferrer'> 
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/wagole-musa/" target="_blank" rel='noopener noreferrer'>
                                <i class="fab fa-linkedin"></i>
                            </a>  
                        </div>
                    </div>
                    <div className="profile-details-name">
                           <span className="primary-text">
                               { ""}

                               Hello, I'M <span className="highlighted">Wagole Musa</span>
                           </span>
                       </div>
                       <div className="profile-details-role">
                           <span className="primary-text">
                               <h1>
                                    { " "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Full Stack Developer " ,
                                            1000,
                                            "MERN Stack Developer " ,
                                            1000,
                                            "React Developer " ,
                                            1000,
                                            "Node.js / Solidity",
                                            1000,
                                            "SQL, PostgresSql, Mysql, MongoDB ",
                                            1000,
                                        ]}
                                   />
                               </h1>
                               <span className="profile-role-tagline">
                                   Knack of building applications with front, Databases, and backend operations.
                                </span>
                           </span>
                        </div>
                        <div className="profile-options">
                            
                            <Link to="/Hire" class="btn btn--orange1">Hire Developer</Link>
                           
                            <a href="wagolemusaCV.pdf" download="wagolemusaCV.pdf">
                                <button className="btn1 highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
              

                <div className='col-md-6'>

                <div className="profile-picture">
                    
                        <div className="profile-picture-background">

                        </div>
                    </div>
                </div>
            </div>
</div>
       
        <Footer/>
        </div>
        <About/>
        <Resume/>
        <Projects />
        </>
    )

}

export default Profile;