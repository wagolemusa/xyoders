import React from 'react'
import { Link } from "react-router-dom";
import rexx from '../images/rexx.jpg'
import rr1 from '../images/rr1.jpg'
import rr from '../images/rr.jpg'
export default function About(){
    return(
        <section className="about-us">
            <div className="container-fluid">
            <div className="resume-heading">
                <span>About Me</span>
            </div>
            <div className="screen-sub-heading">
                <span>Why You should Hire me</span>
            </div><br/><br/>
                <div className="row">
                    <div className="col-md-6">
                        <div class="row justify-content-center">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block" src={rr1} alt='images'/>
                                    <div class="carousel-caption d-none d-md-block">
                                        {/* <h5>Nature, United States</h5> */}
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block" src={rexx} alt='images'/>
                                    <div class="carousel-caption d-none d-md-block">
                                        {/* <h5>Somewhere Beyond, United States</h5> */}
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block" src={rr} alt='images'/>
                                    <div class="carousel-caption d-none d-md-block">
                                        {/* <h5>Yellowstone National Park, United States</h5> */}
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <i class="now-ui-icons arrows-1_minimal-left"></i>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <i class="now-ui-icons arrows-1_minimal-right"></i>
                            </a>
                        </div>
                    </div>
		        </div>
                <div className="col-md-6">
                    <p>
                        Full stack Software Developer with a passion for development of scalable
                        applications. Expert in devising innovative and tailored enterprise solutions
                        and problem solving to assist businesses achieve their goals in a variety of
                        industries. Excels in every stage of the life cycle of software development,
                        including design creation, coding, debugging, testing, and maintenance using
                        industry best practices.
                        I am passionate about adding value to any organisation while I sharpen my
                        skills and make sure I stay at the cutting edge as a full stack software developer.
                    </p>
                    <h2>Here are a Few Highlights:</h2>
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        Full Stack web development<br/>
                    </div>
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        Interactive Front End as per the design
                    </div>
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        Building REST API
                    </div>
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        Managing database
                    </div>
                    <div class="resume-main-heading">
                        <div class="heading-bullet"></div>
                        Mern Stack
                    </div>
                    <br/>
                    <Link to="/Hire" class="btn btn--orange">Hire Developer</Link>
                    <button type="button" class="btn btn--orange_signup" data-toggle="modal" data-target="#exampleModal">
                        Contact Me
                    </button>                   
               </div>
                </div>
            </div>
         
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div className="cont-me">
                <i class="far fa-envelope"></i><span>info@xycoders.co.ke</span><br/>
                <i class="fas fa-at"></i><span>wagolemusa@gmail.com</span><br/>
                <i class="fas fa-phone-volume"></i><span>+254 725696042</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}