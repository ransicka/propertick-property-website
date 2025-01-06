import React, { useState } from 'react';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";


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
            <option value="Villa">Villa</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="minPrice" className="form-label">Min Price (LKR)</label>
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
          <label htmlFor="maxPrice" className="form-label">Max Price (LKR)</label>
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





// import React, { useState } from 'react';
// import "react-widgets/styles.css";
// import DropdownList from "react-widgets/DropdownList";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Slider from "react-slider";
// import '../App.css'; // Optional for slider styling

// const SearchForm = ({ onSearch }) => {
//   const [criteria, setCriteria] = useState({
//     type: '',
//     minPrice: 0,
//     maxPrice: 1000000,
//     minBedrooms: 0,
//     maxBedrooms: 10,
//     startDate: null,
//     endDate: null,
//     postcode: '',
//   });

//   const propertyTypes = ["", "House", "Flat", "Villa"];

//   const handleChange = (name, value) => {
//     setCriteria({
//       ...criteria,
//       [name]: value,
//     });
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(criteria);
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Search Properties</h3>
//       <form className="row g-3" onSubmit={handleSearch}>
//         {/* Type Dropdown */}
//         <div className="col-md-6">
//           <label htmlFor="type" className="form-label">Type</label>
//           <DropdownList
//             data={propertyTypes}
//             value={criteria.type}
//             onChange={(value) => handleChange("type", value)}
//             placeholder="Select Type"
//           />
//         </div>

//         {/* Price Range Slider */}
//         <div className="col-md-6">
//           <label htmlFor="price" className="form-label">Price Range (£)</label>
//           <Slider
//             className="custom-slider"
//             value={[criteria.minPrice, criteria.maxPrice]}
//             onChange={(values) => handleChange("price", values)}
//             min={0}
//             max={100000000}
//             step={1000}
//             renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//           />
//           <div className="d-flex justify-content-between mt-1">
//             <span>£{criteria.minPrice}</span>
//             <span>£{criteria.maxPrice}</span>
//           </div>
//         </div>

//         {/* Bedroom Range Slider */}
//         <div className="col-md-6">
//           <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
//           <Slider
//             className="custom-slider"
//             value={[criteria.minBedrooms, criteria.maxBedrooms]}
//             onChange={(values) => handleChange("bedrooms", values)}
//             min={0}
//             max={100}
//             step={1}
//             renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//           />
//           <div className="d-flex justify-content-between mt-1">
//             <span>{criteria.minBedrooms}</span>
//             <span>{criteria.maxBedrooms}</span>
//           </div>
//         </div>

//         {/* Start Date */}
//         <div className="col-md-6">
//           <label htmlFor="startDate" className="form-label">Start Date</label>
//           <DatePicker
//             selected={criteria.startDate}
//             onChange={(date) => handleChange("startDate", date)}
//             className="form-control"
//             placeholderText="Select Start Date"
//           />
//         </div>

//         {/* End Date */}
//         <div className="col-md-6">
//           <label htmlFor="endDate" className="form-label">End Date</label>
//           <DatePicker
//             selected={criteria.endDate}
//             onChange={(date) => handleChange("endDate", date)}
//             className="form-control"
//             placeholderText="Select End Date"
//           />
//         </div>

//         {/* Postcode */}
//         <div className="col-md-6">
//           <label htmlFor="postcode" className="form-label">Postcode</label>
//           <input
//             type="text"
//             className="form-control"
//             id="postcode"
//             name="postcode"
//             value={criteria.postcode}
//             onChange={(e) => handleChange("postcode", e.target.value)}
//           />
//         </div>

//         {/* Search Button */}
//         <div className="col-md-6 pt-4 mt-4">
//           <button type="submit" className="btn btn-primary btn-lg">
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;

