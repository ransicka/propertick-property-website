import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// A card component used to feature in Home page

const HomePropertyCard = ({ property }) => {
  const { id, type, title, price, location, picture, added } = property;

  return (
    <div className="card">
      <img src={picture.main} style={{height:'250px', objectFit:'cover'}} className="card-img-top" alt={type} />
      <div className="card-body">
        
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-house-fill"></i> {type} - LKR {price.toLocaleString()}</h6>
        <p className="card-text">
          <strong><i className='bi bi-geo-alt-fill'></i> {location.city} {location.postcode}</strong> <br />
        </p>
        
        <div className="d-flex align-items-center gap-2">
          <Link to={`/properties/${id}`} className="btn btn-outline-success mt-2 col-12" target="_blank">
            View Details
          </Link>
        </div>
        <p className="card-text mt-2">
          <small className="text-muted">Added on {added.day} {added.month}, {added.year}</small>
        </p>
      </div>
    </div>
  );
};

export default HomePropertyCard;
