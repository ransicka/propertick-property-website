import React, { useState, useEffect } from 'react';

const WishlistSidebar = ({ isOpen, toggleSidebar }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Load wishlist from local storage on component mount
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    const handleRemove = (propertyId) => {
        const updatedWishlist = wishlist.filter((id) => id !== propertyId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <div
            className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
            style={{
                width: '300px',
                background: '#f8f9fa',
                transition: '0.3s',
                zIndex: 1050,
                position: 'fixed',
                top: 0,
                right: isOpen ? 0 : '-300px',
                height: '100%',
            }}
            tabIndex="-1"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">My Wishlist</h5>
                <button
                    type="button"
                    className="btn-close"
                    onClick={toggleSidebar}
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                {wishlist.length > 0 ? (
                    <ul className="list-group">
                        {wishlist.map((propertyId) => (
                            <li key={propertyId} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Property {propertyId}</span>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleRemove(propertyId)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No properties in your Wishlist yet!</p>
                )}
            </div>
        </div>
    );
};

export default WishlistSidebar;
