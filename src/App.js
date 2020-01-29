import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile/index";

function App() {

  const [singleProfile, setSingleProfile] = useState({});

  return (
    <Router>
      <>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} setSingleProfile={setSingleProfile} />
          <Route exact path='/profile' component={Profile} singleProfile={singleProfile} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
