import './Navigation.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  console.log('task2');
  return (
    <nav className="app-nav">
      <NavLink exact to="/" activeClassName="active">
        Task
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        Users
      </NavLink>
    </nav>
  );
};
export default Navigation;
