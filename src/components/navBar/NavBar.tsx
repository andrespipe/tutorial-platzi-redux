import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Users</Link>
      &nbsp;
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}

export default NavBar;
