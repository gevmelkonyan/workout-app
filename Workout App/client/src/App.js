//import pages here to create routes for them
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Post from './Pages/Post';
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import CreateGraph from "./Pages/CreateGraph";


function App() 
{
  // key is index in array, value is value (refer to console log to see that array)
  return (
    <div className="App">
        <Router>
          <div className="navbar">
            <div className="links">
              <Link to="/"> All Notes</Link>
              <Link to="/creategraph"> Data Entry</Link>
              <Link to="/createpost"> Create a Note</Link>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
            </div>

          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/creategraph" exact component={CreateGraph} />
            <Route path="/createpost" exact component={CreatePost} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
