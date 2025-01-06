import React, { useState, useEffect } from 'react';

const WishlistSidebar = ({ isOpen, toggleSidebar }) => {
  const [wishlist, setWishlist] = useState([]);

  // Loads wishlist from local storage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  // Handles property remove
  const handleRemove = (propertyId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== propertyId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Cleanes the wishlist
  const handleClearAll = () => {
    setWishlist([]);
    localStorage.setItem('wishlist', JSON.stringify([]));
  };

  // Handle dropping properties 
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedProperty = JSON.parse(event.dataTransfer.getData('property'));

    if (!wishlist.some((item) => item.id === droppedProperty.id)) {
      const updatedWishlist = [...wishlist, droppedProperty];
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  // Prevent default behavior during drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
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
        <button className="btn-close" onClick={toggleSidebar}></button>
      </div>
      <div className="offcanvas-body">
        {wishlist.length > 0 ? (
          <>
            <ul className="list-group">
              {wishlist.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center gap-2">
                    <img src={item.picture.main} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                    <span>{item.title}</span>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-danger mt-3 w-100"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </>
        ) : (
          <p>No properties in your Wishlist yet!</p>
        )}
      </div>
    </div>
  );
};

export default WishlistSidebar;
