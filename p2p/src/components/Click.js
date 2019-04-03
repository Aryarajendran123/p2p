import React from 'react';
import {NavLink} from 'react-router-dom';
import './Click.css';

const Click = ()=>{
    return(
        <div className="click">
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li><NavLink to="/home">Logout</NavLink></li>
                    <li>Edit Profile</li>
                    <li>Settings</li>
                    
                </ul>
            </div>
        </nav></div>
    );
}

export default Click;