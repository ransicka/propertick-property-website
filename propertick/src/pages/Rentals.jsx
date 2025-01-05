import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PropertyList from '../components/PropertyList';
import propertiesData from '../../public/properties.json';

const Rentals = () => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

  const handleSearch = (criteria) => {
    const {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      startDate,
      endDate,
      postcode,
    } = criteria;

    const filtered = propertiesData.properties.filter((property) => {
      const matchesType = !type || property.type === type;
      const matchesPrice =
        (!minPrice || property.price >= Number(minPrice)) &&
        (!maxPrice || property.price <= Number(maxPrice));
      const matchesBedrooms =
        (!minBedrooms || property.bedrooms >= Number(minBedrooms)) &&
        (!maxBedrooms || property.bedrooms <= Number(maxBedrooms));
      const matchesPostcode = !postcode || property.location.postcode.includes(postcode);
      const matchesDate =
        (!startDate || new Date(property.added.date) >= new Date(startDate)) &&
        (!endDate || new Date(property.added.date) <= new Date(endDate));

      return matchesType && matchesPrice && matchesBedrooms && matchesPostcode && matchesDate;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Rentals;
