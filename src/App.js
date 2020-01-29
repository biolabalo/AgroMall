import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile/index";

function App() {

  return (
    <Router>
      <>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route exact path='/profile' component={Profile}  />
        </Switch>
      </>
    </Router>
  );
}

export default App;
