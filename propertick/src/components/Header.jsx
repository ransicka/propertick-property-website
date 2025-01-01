import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/">Propertick</Link>
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
                </div>
            </div>
        </nav>
    );
};

export default Header;
