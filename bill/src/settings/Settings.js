import React from 'react'

import './settings.css'
function Settings(){
    return(
        <div className="settings">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="settingsWrapper">
                            <div className="settingsTitle">
                                <span className="settingsUpdateTitle">Update Your Account</span>
                                <span className="settingsDeleteTitle">Delete Acount</span>
                            </div>
                            <form className="settingsForm">
                                <label>Profile Picture</label>
                                <div className="settingsPP">
                                    <img src="https://yt3.ggpht.com/yti/APfAmoFd6uMgTwOqH5I0VKBKooTHYnNx09D2HX6GDhrT=s88-c-k-c0x00ffffff-no-rj-mo"
                                        alt=""
                                    />
                                    <label htmlFor="fileInput">
                                        <i className="settingsPPIcon far fa-user-circle"></i>
                                    </label>
                                    <input type="file" id="fileInput" style={{display:"none"}}/>
                                </div>
                                <label>Username</label>
                                <input type="text" placeholder="Wagole musa" />
                                <label>Email</label>
                                <input type="email" placeholder="Wagole@gmail.com" />
                                <label>Password</label>
                                <input type="password" />
                                <button className="settingsSubmit">Update</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Settings