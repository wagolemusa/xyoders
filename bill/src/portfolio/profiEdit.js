
function profEdit () {
    return(

        <section className="resume">
            <div className="resume-heading">
                <span>Resume</span>
            </div>
            <div className="screen-sub-heading">
                <span>My formal Bio Details</span>
            </div>
    
            <div className="container">
            <div class="col-sm-2">
            <nav class="nav-sidebar">
                <ul class="nav tabs">
                <li class="active"><i class="fas fa-graduation-cap"></i><a href="#tab1" data-toggle="tab">Education</a></li>
                <li class=""><i class="fas fa-network-wired"></i><a href="#tab2" data-toggle="tab">Career Experience</a></li>
                <li class=""><i class="fas fa-tasks"></i><a href="#tab3" data-toggle="tab">Programming Skills</a></li> 
                <li class=""><i class="fas fa-tasks"></i><a href="#tab4" data-toggle="tab">Projects</a></li> <br/><br/>
                <li class=""><i class="fas fa-music"></i><a href="#tab5" data-toggle="tab">Interests</a></li>

                </ul>
            </nav>
              
        </div>

        <div class="tab-content">
        <div class="tab-pane active text-style" id="tab1">
        {/* <h2>Education</h2> */}
      
        <div class="resume-main-heading">
            <div class="heading-bullet">
            </div>
                <span>Nairobi Aviation College(of Kisumu Kenya)</span>
                <div class="heading-date">2013 -2015</div>
                </div><div class="resume-sub-heading">
                    <br/><br/>
                <p>Diploma of Computer/Information Technology <br/>Administration and Management.</p>
                <br/><br/>
             </div><div class="resume-heading-description">
            <span></span></div>
           
            </div>
            <div class="tab-pane text-style" id="tab2">
            <div className="row">
                <div className="col-md-9">
                <div class="heading-bullett"></div>
                    <div className="heading-style">
                        <h1>IT Support Intern at county gervoment of Kisumu</h1>
                        <p>- Installing and configuring computer hardware, software, systems, networks,</p>
                        <p>- Monitoring and maintaining computer systems and networks.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div class="heading-date1">2015 – 2016</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <div class="heading-bullett"></div>
                        <div className="heading-style">
                        <h1>Self-taught Software Engineering at Lakehub</h1>
                            <p>- Lakehub is an open space for entrepreneurs, technologists and investors</p>
                            <p>- Participating in Hankerthone, Tech events and meetups.</p>
                        </div>
                </div>
                <div className="col-md-3">
                <div class="heading-date1">2016 – 2017</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                <div class="heading-bullett"></div>
                    <div className="heading-style">
                    <h1>Bithost Technologies</h1>
                    <p>- My role in this company was to design websites with WordPress and internet
                        installation</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div class="heading-date1">2017 – 2018</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                <div class="heading-bullett"></div>
                    <div className="heading-style">
                        <h1>Andela Bootcamp </h1>
                        <p>I joined Andela Bootcamp, for joining Andela fellowship which is a full-time,
                            four -year commitment. I was told to build a parcel delivering system
                            endpoints, with Flask Restful APIs, SQL, PostgreSQL, psycopg2, JWT and
                            fetch the endpoints with vanilla javascript es6 without using any framework</p>
                            or Object-relational mapping(ORM). Its now a transport booking system,
                            <p>Auser do payments with M-Pesa and receive message when the parcel is
                            delivered or cancelled.<br/>
                            https://wagolemusa.github.io</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div class="heading-date1"> 2018</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                <div class="heading-bullett"></div>
                    <div className="heading-style">
                    <h1>Freelancing </h1>
                    <p>I started freelancing from small campay buliding websites and webapplications, and
                    buld my own Ideas as I grow as a full stack software developer.
                    Currently am working on Church management systems software as a service(sasa) using
                    Node, React and MongoDB with Cardpointe APIs.</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div class="heading-date1">2019–Today</div>
                </div>
            </div>
            </div>
            <div class="tab-pane text-style" id="tab3">
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>JavaScript</span>
                            <br/>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>Django</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>Node.js</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>React</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>Python</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>PostgresSQL</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>MYSQL</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>HTML</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>CSS</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>MongoDB</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>AWS</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="heading-bullett"></div>
                            <span>Docker</span>
                            <div class="skill-percentage">
                                <div style={{width: "85%"}} class="active-percentage-bar">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane text-style" id="tab4">
                <div className="scoll">
                    <div class="resume-main-heading">
                        <div class="heading-bullett"></div>
                            <div className="heading-style">
                                <h1>Booking Transport Systems and Send Parcels</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>Python, Flask-RESTful APIs, REST API Design.</li>
                                        <li>PostgreSQL, SQL, Heroku.</li>
                                        <li>Testing, Continuous integration(CI)</li>
                                        <li>Mpesa Daraja APIs(For payments)</li>
                                        <li>Africastalking (sending SMS)</li>
                                        <li>ES6 JavaScript(For fetching APIs)</li>
                                    </ul>
                                    
                                     <a href="https://wagolemusa.github.io/" target="_blank" rel='noopener noreferrer'>
                                        Project Link
                                   
                                    </a>  
                                   
                                <br/><br/>
                                </div>
                            </div>
                           
                            </div>
                            <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                            <div className="heading-style">
                                <h1>Church Management System(SAAS, CHS)</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>Node, React, Express. MongoDB</li>
                                    </ul>
                                <a href="https://givyapp.herokuapp.com/" target="_blank" rel='noopener noreferrer'>
                                    Project Link
                                </a>  
                                <br/><br/>
                                    
                                </div>
                            </div>
                            </div>

                            <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                            <div className="heading-style">
                                <h1>E-Commerce Website</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>Django, PostgreSQL, ORM, Boostrap. Mpesa APIs.</li>
                                    
                                    </ul>
                                    <a href="https://givyapp.herokuapp.com/" target="_blank" rel='noopener noreferrer'>
                                    Project Link
                                </a>  
                                <br/><br/>
                                </div>
                            </div>
                        </div>
                            <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                            <div className="heading-style">
                                <h1>Food Delivery Website</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>Django, PostgreSQL, ORM, Boostrap. Mpesa APIs</li>
                                    
                                    </ul>
                                    <a href="https://caramelcoffee.herokuapp.com/" target="_blank"rel='noopener noreferrer' >
                                    Project Link
                                </a>  
                                <br/><br/>
                                </div>
                            </div>
                        </div>
                            <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                        
                            <div className="heading-style">
                                <h1>Website</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>HTML, CSS, BOOTSTRAP</li>
                                    
                                    </ul>
                                    <a href="https://www.korgasgroup.com/" target="_blank" rel='noopener noreferrer'>
                                    Website Link
                                </a>  
                                <br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                            <div className="heading-style">
                                <h1>Real Estate Website </h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>Django, PostgreSQL, ORM, Boostrap, Heroku</li>
                                    
                                    </ul>
                                    <a href="https://chakraproperity.herokuapp.com/" target="_blank" rel='noopener noreferrer'>
                                    Website Link
                                </a>  
                                <br/><br/>
                                </div>
                            </div>

                            </div>
                            <div class="resume-main-heading">
                            <div class="heading-bullett"></div>
                            <div class="resume-main-heading">
                            <div className="heading-style">
                                <h1>Website UI</h1>
                                <h3>Skills gianed in this project</h3>
                                <div className="cv-icon">
                                    <ul>
                                        <li>HTML, CSS, BOOTSTRAP</li>
                                    
                                    </ul>
                                    <a href="https://wagolemusa.gitlab.io/lakehub/" target="_blank" rel='noopener noreferrer'>
                                    Website Link
                                </a>  
                                <br/><br/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
            <div class="tab-pane text-style" id="tab5">
            <div class="resume-main-heading">
            <div class="heading-bullett"></div>
                <div className="heading-style">
                    <span>Teaching</span>
                    <p>Apart from being a tech enthusiast and a code writer, 
                    i also love to teach people what i know simply because i believe in sharing.</p>
                </div>
            </div>
                <div class="resume-main-heading">
                <div class="heading-bullett"></div>
                <div className="heading-style">
                    <h1>Music </h1>
                    <p>Listening to old skull hip hop music and Ragge music</p>
                </div>
                </div>
                <div class="resume-main-heading">
                <div class="heading-bullett"></div>
                <div className="heading-style">
                    <h1>Learning</h1>
                    <p>I lave Learning new Technology, Currently am learning blockchain technology.</p>
                </div>
              </div>
            <div class="col-xs-6 col-md-3">
            
            </div>
            </div>
            </div>
        </div>
       </section>
      
    )
}

export default profEdit;