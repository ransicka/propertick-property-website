import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import WishlistSidebar from './WishlistSidebar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen]=useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/">Propertick <img src="./AdobeStock_581716218.png" width="24px" height="24px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center w-100 mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sales">Sales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Rentals">Rentals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact-us">Contact Us</Link>
                        </li>   
                    </ul>
                    <button 
                    className="btn btn-primary"
                    onClick={toggleSidebar}
                    style={{marginLeft: 'auto'}}
                    >
                        Wishlist
                    </button>

                </div>
            </div>
        </nav>
        <WishlistSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Header;
