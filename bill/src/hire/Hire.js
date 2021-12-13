import React from "react";
import RenderSteps from "./RenderSteps";
import "./hire.css"

export default function Hire(){
    return(
        <div className="row">
          
            <div className="col-md-6">
            <div className="sidejobback">
                <div className="sidejob">
                <div className="titleme">
                <h1>Elevate your project with the perfect<br/> <span> developers for the job </span> </h1>
                </div>
                <div className="jobs-icon">
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>Web Development</span><br/>
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>Forex & cryptocurrencies</span><br/>
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>Blockchain Development</span><br/>
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>UI/UX Design</span><br/>
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>Database Design</span><br/>
                    <i class="far fa-check-circle"></i>&nbsp;&nbsp;<span>Data Analysis</span><br/>
                </div>
            </div>
            </div>
            </div>
            <div className="col-md-6">
                <RenderSteps/>
            </div>
        </div>
    )
}