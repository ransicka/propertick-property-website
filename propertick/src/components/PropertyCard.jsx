import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Property cards used in properties page

const PropertyCard = ({ property, onDragStart }) => {
  const { id, type, title, bedrooms, price, tenure, description, location, picture, added } = property;

  // Wishlist functionality

  // State to track if the property is in the wishlist
  const [isWished, setIsWished] = useState(false);

  // Load initial wishlist state
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setIsWished(wishlist.some((item) => item.id === id));
  }, [id]);

  // Toggle wishlist
  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (isWished) {
      // Remove from wishlist
      wishlist = wishlist.filter((item) => item.id !== id);
    } else {
      // Add to wishlist
      wishlist.push(property); // Store full property object
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setIsWished(!isWished);
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('property', JSON.stringify(property)); // Drag full property data
        onDragStart(property);
      }}
      style={{ cursor: 'grab' }}
    >
      <img
        src={picture.main}
        style={{ height: '250px', objectFit: 'cover' }}
        className="card-img-top"
        alt={type}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <i className="bi bi-house-fill"></i> {type} - LKR {price.toLocaleString()}
        </h6>
        <p className="card-text">
          <strong>
            <i className="bi bi-geo-alt-fill"></i> {location.city} {location.postcode}
          </strong>
          <br />
          <strong>
            <i className="bx bxs-bed"></i> Bedrooms:
          </strong>{' '}
          {bedrooms}
          <br />
          <strong>
            <i className="bi bi-key-fill"></i> Tenure:
          </strong>{' '}
          {tenure}
          <br />
          {/* Showing only first part of description to avoid long text */}
          {description.substring(0, 100)}...
        </p>
        <div className="d-flex align-items-center gap-2">
          <Link to={`/properties/${id}`} className="btn btn-success mt-2 col-8" target="_blank">
            View Details
          </Link>
          <button
            className={`btn col-4 ${isWished ? 'btn-danger' : 'btn-secondary'} mt-2 pl-1`}
            onClick={toggleWishlist}
          >
            <i className={`bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
        <p className="card-text mt-2">
          <small className="text-muted">
            Added on {added.day} {added.month}, {added.year}
          </small>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
