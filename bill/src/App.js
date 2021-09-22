import './App.css';
import Topbar from './Topbar/Topbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../src/login/Login'
import Register from '../src/login/Register'
import Footer from './pages/Footer'
import Blogs from './pages/Blogs'
import Single from './single/Single';
import Write from './write/Write';
import Settings from './settings/Settings';
import Hire from './hire/Hire';

function App() {
  const user = false;
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
          <Route path="/Blogs">
            <Blogs/>
          </Route>
          <Route path="/Write">
          { user ? <Home/> : <Write/>}
          </Route>
          <Route path="/Settings">
          { user ? <Home/> : <Settings/>}
          </Route>
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
