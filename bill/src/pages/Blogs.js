import React from 'react'
import './Home.css'
import xy1 from '../images/xy1.jpg'

function Blogs(){
    return(
        <div>
        <section>
            <div className="blog-back">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mini-track__body">
                                <img src={xy1} alt="xycoders" 
                                    class="img-fluid rounded"
                                    alt="" 
                                />
                                <h2>Advanced SQL in PostgreSQL</h2>
                                <p>
                                    Go beyond the basics and become a SQL master.
                                    Learn modern SQL features that let you writ
                                    more complex and effective querie
                                </p>
                                <a href="#">DETAILS</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mini-track__body">
                                <img src={xy1} alt="xycoders" 
                                    class="img-fluid rounded"
                                    alt="" 
                                />
                            
                                <h2>Advanced SQL in PostgreSQL</h2>
                                <p>
                                    Go beyond the basics and become a SQL master.
                                    Learn modern SQL features that let you writ
                                    more complex and effective querie
                                </p>
                                <a href="#">DETAILS</a>
                        
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="mini-track__body">
                        <img src={xy1} alt="xycoders" class="img-fluid rounded"
                                alt="" />
                        
                            <h2>Advanced SQL in PostgreSQL</h2>
                            <p>
                                Go beyond the basics and become a SQL master.
                                Learn modern SQL features that let you writ
                                more complex and effective querie
                            </p>
                            
                            <a href="#">DETAILS</a>
                        </div>
                        </div>
      
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Blogs