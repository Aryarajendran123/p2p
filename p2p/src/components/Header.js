import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';


import {Route,Link,BrowserRouter} from 'react-router-dom';

export default function Header(){
    return (
        
        <div className="header">
        <BrowserRouter>
            <div className="title">Welcome User Name</div>
            <ul>
                <li><a>Edit </a></li>
                <li><a>Help</a></li>
                <li><a><Link to="/home"> Logout </Link> </a></li>
                <Route  path="home" component={Homepage} />
            </ul>
            </BrowserRouter>
        </div>
        
    );
}