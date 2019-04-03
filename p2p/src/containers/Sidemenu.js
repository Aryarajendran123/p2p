import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidemenu.css';
import Header from './Header';

export default function SideMenu(){
    return (
        <div>
        <Header />
        <div className="sidemenu">
            <nav className="navigation">
                <ul className="mainmenu">
                    <li> <a>Lend</a>  
                        <ul className="submenu">
                            <li><a><NavLink to='/login/ViewRequest' activeClassName="active">View Request</NavLink></a></li>
                            <li><a><NavLink to='/login/LendList' activeClassName="active">Lend List</NavLink></a></li>
                        </ul>
                    </li>
                    <li><a>Borrow  </a> 
                        <ul className="submenu">
                            <li><a> <NavLink to='/login/SendRequest' activeClassName="active">Send Request</NavLink></a>  </li>
                            <li><a> <NavLink to='/login/BorrowList' activeClassName="active">Borrow List</NavLink> </a> </li>
                        </ul>
                    </li>
                    <li><a>Collateral  </a> 
                        <ul className="submenu">
                            <li> <a><NavLink to='/login/AddCollateral' activeClassName="active">Add Collateral</NavLink></a>  </li>
                            <li> <a><NavLink to='/login/EditCollateral' activeClassName="active">Edit Collateral</NavLink></a>  </li>
                            <li> <a><NavLink to='/login/ViewCollateral' activeClassName="active">View Collateral</NavLink> </a> </li>
                        </ul>
                    </li>

                     <li> Help  </li>
                </ul>
            </nav>
        </div></div>
    );
}