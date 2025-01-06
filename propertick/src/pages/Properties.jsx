import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PropertyList from '../components/PropertyList';
import propertiesData from '../../public/properties.json';

const Properties = () => {
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

    const monthMap = {
      January: 1, February: 2, March: 3, April: 4,
      May: 5, June: 6, July: 7, August: 8,
      September: 9, October: 10, November: 11, December: 12
    };

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
        (!startDate || new Date(`${property.added.year}-${monthMap[property.added.month]}-${property.added.day}`) >= new Date(startDate)) &&
        (!endDate || new Date(`${property.added.year}-${monthMap[property.added.month]}-${property.added.day}`) <= new Date(endDate));

      return matchesType && matchesPrice && matchesBedrooms && matchesPostcode && matchesDate;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <br />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Properties;
