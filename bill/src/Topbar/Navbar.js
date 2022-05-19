import React, { useContext } from 'react'
import googf from '../images/googf.png'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

function Navbar(){
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    return(
        <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top">
        
        <a class="navbar-brand pl-5" href="/">
            <img src={googf} alt="logoimage" />
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to='/' class="nav-link px-2">Home</Link>
                </li>
                <li class="nav-item">
                <Link to='/acadamy' class="nav-link px-2">Acadamy</Link>
                </li>
                <li class="nav-item">
                <Link to='/allBlogs' class="nav-link px-2">Blogs</Link>
                </li>
                <li class="nav-item">
                <Link to='/profile' class="nav-link px-2">Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link to='/hire' class="nav-link px-2">Hire Developer</Link>
                </li>
                <li class="nav-item">
                <Link to='/write' class="nav-link px-2">Write Blog</Link>
                </li>
                
                <li className="topListItem" onClick={handleLogout}>
                     {user && "LOGOUT"}
                </li>
                 
                { 
                    user ? (
                 
                        <Link to="/settings">
                        <img className="topImg" src={PF+user.profilePic} alt="" />
                            </Link>
                    ) : (
                        <>
                            <li class="nav-item">
                            <Link to='/register' class="nav-link px-2">Register</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/login' class="nav-link px-2">Login</Link>
                            </li>
                        </> 
                    )
                }
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;
