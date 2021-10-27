import React from "react";
import RenderSteps from "./RenderSteps";
import gxd from '../images/gxd.png'
import "./hire.css"

export default function Hire(){
    return(
        <div className="row">
          
            <div className="col-md-6">
            <div className="sidejobback">
                <div className="sidejob">
                <h1>Elevate your project with the perfect<br/> <span> developers for the job </span> </h1>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <RenderSteps/>
            </div>
        </div>
    )
}