import React from 'react';
import './Homepage.css';
import {Route,NavLink,BrowserRouter} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

const Homepage = () => {
  return(
    <div className="containerr">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/signup">Signin</NavLink></li>
          <li><NavLink to="/register">Signup</NavLink></li>
        </ul>
    </div>
  );
}
export default Homepage;