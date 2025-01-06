import React from 'react';
import PropertyCard from './PropertyCard';

// Show all the properties on the properties page

const PropertyList = ({ properties }) => {
  const handleDragStart = (property) => {
    window.event.dataTransfer.setData('property', JSON.stringify(property));
  };

  return (
    <div className="container card-container">
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4 mb-4" key={property.id}>
            <PropertyCard property={property} onDragStart={handleDragStart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

