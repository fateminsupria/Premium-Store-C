import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import header from '../../images/shopnow.png';
const Header = () => {
    return (
      
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header"> 
                <nav className="nav">
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt=""/>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/order">Order</Link>
                        </li>
                        <li>
                            <Link to="/manageProduct">Admin</Link>
                        </li>
                        <li>
                            <Link to="/checkOut">Check Out</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/Home">Back Home</Link>
                        </li>
                    </ul>
                </nav>
                <div className="title-container">
                    <h2>Authentic Item</h2>
                </div>
            </div>
        );
    };

export default Header;