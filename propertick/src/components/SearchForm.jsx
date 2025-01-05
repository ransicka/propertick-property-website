import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: '',
    endDate: '',
    postcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria({
      ...criteria,
      [name]: value,
    });
  };

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
          <select
            className="form-select"
            id="type"
            name="type"
            value={criteria.type}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="minPrice" className="form-label">Min Price (£)</label>
          <input
            type="number"
            className="form-control"
            id="minPrice"
            name="minPrice"
            value={criteria.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="maxPrice" className="form-label">Max Price (£)</label>
          <input
            type="number"
            className="form-control"
            id="maxPrice"
            name="maxPrice"
            value={criteria.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="minBedrooms" className="form-label">Min Bedrooms</label>
          <input
            type="number"
            className="form-control"
            id="minBedrooms"
            name="minBedrooms"
            value={criteria.minBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="maxBedrooms" className="form-label">Max Bedrooms</label>
          <input
            type="number"
            className="form-control"
            id="maxBedrooms"
            name="maxBedrooms"
            value={criteria.maxBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
            value={criteria.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={criteria.endDate}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3 pt-4">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
