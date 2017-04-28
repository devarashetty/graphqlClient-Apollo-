import React from 'react';
import { Link } from 'react-router';

import Profile from '../components/Profile';

const Layout = ({ children, params, location }) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
      
       

        <Profile />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);


export default Layout;
