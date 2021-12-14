import React from 'react'

export default function Footer(){
    return(
        <div className="footer">
        <footer class="text-white">
            
            <div class="container p-4 pb-0">
            <div className="row">
            <div className="col-md-4">
                <h4>Quick links</h4>
                <hr/>
                <div className="row footlink">
                <div className="col">
                    <a href="/Hire">Hire Developer</a><br/>
                    <a href="/Allblogs">Blog</a>
                </div>
                <div className="col">
                    <a href="/register">Join Community </a>
                    <a href="/contact">Contact</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <h4>Assistance</h4>
                <hr/>
                <p>Need assistance? Drop us a line at </p>
                <p>info@xycoders.co.ke</p>
                <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark">
                    write to us
                </button>

            </div>
            <section class="col-md-4">
                <h4>Follow us</h4>
                <hr/>
                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-facebook-f"></i
                ></a>
                
                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-google"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-instagram"></i
                ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-linkedin-in"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><i class="fab fa-github"></i
                ></a>
                </section>
            </div>
            </div>
            <div className="xcme">
            <div class="text-center p-3">
                © 2021 Copyright&nbsp;&nbsp;
                <a class="text-white" href="/">xycoders</a>
            </div>
            </div>

            </footer>
        </div>
    )
}

