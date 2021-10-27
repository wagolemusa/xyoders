import React from 'react'

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-parent">
                <img src={require('../images/v.png').default} alt='no internet connection'/>
            </div>
        </div>
    )
}