import React from "react";
import {Navbar,  Nav }  from "react-bootstrap";
import { withRouter } from "react-router-dom";

const  NavBar = ({history}) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light"  fixed="top" >
    <Navbar.Brand  href="#" onClick={()=> history.push('/')}>AgroMall</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>  
        <Nav.Link href=""></Nav.Link>
        <Nav.Link eventKey={2} href="#"></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default  withRouter(NavBar);
