import React, { useContext, useState } from 'react'
import { Context } from "../context/Context";
import axios from "axios"

import './settings.css'
function Settings(){

    const  [file,setFile ] = useState(null);
    const [fullname,  setFullname] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
  
    const { user, dispatch } = useContext(Context);

    const handelSubmit = async (e) =>{
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            fullname,
            username,
            email,
            password
        };
        if (file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);

            }catch(err){}
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
          } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
          }
    }
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
                            <form className="settingsForm" onSubmit={handelSubmit}>
                                <label>Profile Picture</label>
                                <div className="settingsPP">
                                    <img  src={file ? URL.createObjectURL(file): user.profilePic} alt=""/>
                                    <label htmlFor="fileInput">
                                        <i className="settingsPPIcon far fa-user-circle"></i>
                                    </label>
                                    <input type="file" id="fileInput" style={{display:"none"}}
                                    onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                                <label>Full Names</label>
                                <input type="text" placeholder={user.fullname} 
                                    onChange={(e)=>setFullname(e.target.value)}
                                />
                                <label>Username</label>
                                <input type="text" placeholder={user.username} 
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                                <label>Email</label>
                                <input type="email" placeholder={user.email} 
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <label>Password</label>
                                <input type="password"  placeholder={user.password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <button className="settingsSubmit" type="submit">Update</button>
                                {success && (
                                    <span
                                    style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                                    >
                                    Profile has been updated...
                                    </span>
                                )}
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