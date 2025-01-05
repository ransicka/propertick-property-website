import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const { id, type, bedrooms, price, tenure, description, location, picture, url, added } = property;

  const [isWished, setIsWished] = useState(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.includes(id);
  });
  const toggleWishlist = () =>{
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (isWished) {
      const updatedWishlist = wishlist.filter(item => item !== id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsWished(false);
    }else{
      wishlist.push(id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWished(true);
    }
  };

  return (
    <div className="card">
      <img src={picture} style={{height:'250px', objectFit:'cover'}} className="card-img-top" alt={type} />
      <div className="card-body">
        
        <h5 className="card-title">{type} - LKR {price.toLocaleString()}</h5>
        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-geo-alt-fill"></i> {location.city}</h6>
        <p className="card-text">
          <strong><i className='bx bxs-bed'></i> Bedrooms:</strong> {bedrooms} <br />
          <strong><i className="bi bi-key-fill"></i> Tenure:</strong> {tenure} <br />
          {description.substring(0, 100)}...
        </p>
        
        <div className="d-flex align-items-center gap-2">
          <Link to={`/properties/${id}`} className="btn btn-primary mt-2 col-8" target="_blank">
            View Details
          </Link>
          <button className={`btn col-4 ${isWished ? 'btn-danger' : 'btn-secondary'} mt-2 pl-1`} onClick={toggleWishlist}>
            <i className={`bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
        <p className="card-text mt-2">
          <small className="text-muted">Added on {added.day} {added.month}, {added.year}</small>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
