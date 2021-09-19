import React from 'react'

import './write.css'
import index from '../images/index.jpeg'

function Write(){
    return(
        <div>
            <div className="wite">
                <img src={index} className="writeImg" />
                <form  className="writeForm">
                    <div className="wirteFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                            <input type="file" id="fileInput" style={{display:"none"}} />
                            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                        </label>
                    </div>
                    <div className="wirteFormGroup">
                        <textarea 
                            placeholder="Write about Code ....."
                            type="text"
                            className="writeInput writeText">
                        </textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </div>
    )
}
export default Write;