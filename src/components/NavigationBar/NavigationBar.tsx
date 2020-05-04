import React from 'react';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    
    <div className="bg-dark">
      <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="/">Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Users</Link>
            <Link className="nav-link" to="/tasks">Tasks</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
