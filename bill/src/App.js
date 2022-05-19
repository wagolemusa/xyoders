import React from 'react'
import './App.css';
import Topbar from './Topbar/Topbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../src/login/Login'
import Register from '../src/login/Register'
import Footer from './pages/Footer'
import AllBlogs from './pages/AllBlogs';
import Single from './single/Single';
import Write from './write/Write';
import Settings from './settings/Settings';
import Profile from './portfolio/Profile';
import Hire from './hire/Hire';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Topbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Register">
           { user ? <Home/> : <Register/>}
          </Route>
          <Route path="/Login">
          { user ? <Home/> : <Login/>}
          </Route>
          <Route path="/AllBlogs">
            <AllBlogs/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          
          <Route path="/Write">
          { user ? <Write/> : <Register/>}
          </Route>
        
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
          <Route path="/Hire">
            <Hire/>
          </Route>
        </Switch>
      </Router>
     <Footer/>
     
    </div>
  );
}

export default App;
