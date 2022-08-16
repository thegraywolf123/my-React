import React from 'react';
import {Outlet, Link } from "react-router-dom";
import './layout.css';
const Layout =()=> {
    return(
        <div>
            <nav>
                <ul className='Header'>
                    <li>
                        <Link to="/">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};
export default Layout;