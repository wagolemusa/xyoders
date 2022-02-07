import React from 'react'
import cx from '../images/cx.png'
import sd from '../images/sd.gif'
function Middlepage() {
    return (
        <>
            <section className="middle">
                <div className="container-fluid">
                    <div className="title-middle">
                        <h1>SOFTWARE DEVELOPMENT SERVICES</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={cx} class="img-fluid shadow-2-strong" alt="images" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="fas fa-code"></i>
                                            </center>
                                            <h2>Web Development</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="fas fa-crop"></i>
                                            </center>
                                            <h2>UI/UX Design</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="fas fa-link"></i>
                                            </center>
                                            <h2>Blockchain Development</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="fas fa-hand-holding-usd"></i>
                                            </center>
                                            <h2>Forex & cryptocurrencies</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="far fa-chart-bar"></i>
                                            </center>

                                            <h2>Data Analysis</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                                <i class="fas fa-database"></i>
                                            </center>
                                            <h2>Database Design</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="contanct-section">
                <div className="background-sestion">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <p>GET A PERFECT MASH-UP OF DEDICATED ENGINEERS, TOP TECH SKILLS, AND STELLAR PROJECT IDEAS.</p>
                            </div>
                            <div className="col-md-4">
                                <button type="button" class="btn btn--orange_signup" data-toggle="modal" data-target="#exampleModal">
                                    talk to us
                                </button>
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
                                                    <i class="far fa-envelope"></i><span>info@xycoders.co.ke</span><br />
                                                    <i class="fas fa-at"></i><span>wagolemusa@gmail.com</span><br />
                                                    <i class="fas fa-phone-volume"></i><span>+254 725696042</span>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="plan">
                <div className="container-fluid">
                    <h2 class="panel-title">CUSTOM SOFTWARE <span>DEVELOPMENT <br />LIFECYCLE</span></h2>
                    <div className="row">
                        <div className="col-md-4">
                                <div class="panel-heading">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div class="row toggle" id="dropdown-detail-1" data-toggle="detail-1">
                                                <div class="col-md-10">
                                                    <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Planning</h3>
                                                </div>
                                                <div class="col-md-2">
                                                    <i class="fa fa-chevron-down pull-right"></i>
                                                </div>
                                            </div>
                                            <div id="detail-1">
                                                <hr></hr>

                                                <div class="fluid-row">
                                                    <p>We collect all the relevant information from the customer
                                                        to develop custom software development solutions as per their expectation.</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </li>

                                        <li class="list-group-item">
                                            <div class="row toggle" id="dropdown-detail-2" data-toggle="detail-2">
                                                <div class="col-md-10">
                                                    <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Designing</h3>
                                                </div>
                                                <div class="col-md-2"><i class="fa fa-chevron-down pull-right"></i></div>
                                            </div>
                                            <div id="detail-2">
                                                <hr></hr>
                                                <p>
                                                    The system and documents are prepared as per the requirement specifications.
                                                    This helps us define overall system architecture and technology stack.
                                                </p>

                                            </div>
                                            <hr />
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row toggle" id="dropdown-detail-3" data-toggle="detail-3">
                                                <div class="col-md-10">
                                                    <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Defining</h3>
                                                </div>
                                                <div class="col-md-2"><i class="fa fa-chevron-down pull-right"></i></div>
                                            </div>
                                            <div id="detail-3">
                                                <hr></hr>

                                                <p>Once the requirement analysis phase is completed,
                                                    the next step is to define and document software needs.
                                                </p>
                                            </div>
                                            <hr />
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row toggle" id="dropdown-detail-4" data-toggle="detail-4">
                                                <div class="col-md-10">
                                                    <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp; Building</h3>
                                                </div>
                                                <div class="col-md-2"><i class="fa fa-chevron-down pull-right"></i></div>
                                            </div>
                                            <div id="detail-4">
                                                <hr></hr>

                                                <p>
                                                    Developers start to build the entire system by writing code using the chosen programming language,
                                                    techniques, and methodologies.
                                                </p>
                                            </div>
                                            <hr />
                                        </li>
                                    </ul>
                                </div>
                                </div>
                        
                            <div className="col-md-4">
                            <div class="panel-heading">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="row toggle" id="dropdown-detail-5" data-toggle="detail-5">
                                            <div class="col-md-10">
                                                <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Testing</h3>
                                            </div>
                                            <div class="col-md-2"><i class="fa fa-chevron-down pull-left"></i></div>
                                        </div>
                                        <div id="detail-5">
                                            <hr></hr>

                                            <p>Evaluating the quality of software with the aim of finding and fixing defects.</p>
                                        </div>
                                        <hr />
                                    </li>

                                    <li class="list-group-item">

                                        <div class="row toggle" id="dropdown-detail-6" data-toggle="detail-6">
                                            <div class="col-md-10">
                                                <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Deployment</h3>
                                            </div>
                                            <div class="col-md-2"><i class="fa fa-chevron-down pull-right"></i></div>
                                        </div>
                                        <div id="detail-6">
                                            <hr></hr>

                                            <p>
                                                The final software is released and checked for deployment issues, if any.
                                            </p>
                                        </div>
                                        <hr />
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row toggle" id="dropdown-detail-7" data-toggle="detail-7">
                                            <div class="col-md-10">
                                                <h3><span><i class="far fa-check-circle"></i></span>&nbsp;&nbsp;Maintenance</h3>
                                            </div>
                                            <div class="col-md-2"><i class="fa fa-chevron-down pull-right"></i></div>
                                        </div>
                                        <div id="detail-7">
                                            <hr></hr>
                                            <p>
                                                According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per
                                                the specification mentioned in the first phase.
                                            </p>
                                        </div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>
                  

                    <div className="col-md-4">
                        <div className="planimag">
                            <img src={sd} alt="images" />
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Middlepage;