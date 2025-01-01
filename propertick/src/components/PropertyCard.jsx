import React from 'react';

const PropertyCard = ({ property }) => {
  const { type, bedrooms, price, tenure, description, location, picture, url, added } = property;

  return (
    <div className="card">
      <img src={picture} style={{height:'250px', objectFit:'cover'}} className="card-img-top" alt={type} />
      <div className="card-body">
        <h5 className="card-title">{type} - LKR {price.toLocaleString()}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
        <p className="card-text">
          <strong>Bedrooms:</strong> {bedrooms} <br />
          <strong>Tenure:</strong> {tenure} <br />
          {description.substring(0, 100)}...
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Details
        </a>
        <p className="card-text mt-2">
          <small className="text-muted">Added on {added.day} {added.month}, {added.year}</small>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
