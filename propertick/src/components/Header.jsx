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
        {/* Bootstrap navbar is used for responsiveness */}
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container-fluid">
                {/* Home button and logo */}
                <Link className="navbar-brand text-success" to="/">Propertick <img src="../assets/AdobeStock_581716218.png" width="24px" height="24px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center w-100 mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/properties">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </li>   
                    </ul>
                    <button 
                    className="btn btn-primary"
                    onClick={toggleSidebar}    //Toggles the wishlist
                    style={{marginLeft: 'auto'}}
                    >
                        Wishlist
                    </button>

                </div>
            </div>
        </nav>
        {/* Using wishlist as a component */}
        <WishlistSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />    
        </>
    );
};

export default Header;
