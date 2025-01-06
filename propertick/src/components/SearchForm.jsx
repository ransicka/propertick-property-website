import React, { useState } from 'react';
import "react-widgets/styles.css";
import { DropdownList, NumberPicker, DateTimePicker } from 'react-widgets';
// Imported react widgets for form components

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: null,
    endDate: null,
    postcode: '',
  });

  const handleChange = (name, value) => {
    setCriteria({
      ...criteria,
      [name]: value,
    });
  };
// Initialize search filter functionality
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <div className="container mt-4">
      <h3>Search Properties</h3>
      <form className="row g-3" onSubmit={handleSearch}>
        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Type</label>
          <DropdownList
            data={['House', 'Flat', 'Villa', 'Bungalow']}
            value={criteria.type}
            onChange={(value) => handleChange('type', value)}
            placeholder="Select Type"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="minPrice" className="form-label">Min Price (LKR)</label>
          <NumberPicker
            value={criteria.minPrice}
            onChange={(value) => handleChange('minPrice', value)}
            placeholder="Min Price"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="maxPrice" className="form-label">Max Price (LKR)</label>
          <NumberPicker
            value={criteria.maxPrice}
            onChange={(value) => handleChange('maxPrice', value)}
            placeholder="Max Price"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="minBedrooms" className="form-label">Min Bedrooms</label>
          <NumberPicker
            value={criteria.minBedrooms}
            onChange={(value) => handleChange('minBedrooms', value)}
            placeholder="Min Bedrooms"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="maxBedrooms" className="form-label">Max Bedrooms</label>
          <NumberPicker
            value={criteria.maxBedrooms}
            onChange={(value) => handleChange('maxBedrooms', value)}
            placeholder="Max Bedrooms"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <DateTimePicker
            value={criteria.startDate}
            onChange={(value) => handleChange('startDate', value)}
            format="yyyy-MM-dd"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <DateTimePicker
            value={criteria.endDate}
            onChange={(value) => handleChange('endDate', value)}
            format="yyyy-MM-dd"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="postcode" className="form-label">Postcode</label>
          <input
            type="text"
            className="form-control"
            id="postcode"
            name="postcode"
            value={criteria.postcode}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-md-3 pt-4 mt-4">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
