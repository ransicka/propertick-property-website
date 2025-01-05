// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Header from './Header';

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [properties, setProperties] = useState([]);
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     import('../../public/properties.json')
//       .then((data) => {
//         setProperties(data.properties);
//         const foundProperty = data.properties.find((prop) => prop.id === id);
//         setProperty(foundProperty);
//       })
//       .catch((error) => console.error('Error loading properties:', error));
//   }, [id]);

//   if (!property) {
//     return <h2>Property not found</h2>;
//   }

//   const { type, bedrooms, price, tenure, description, location, picture, added } = property;

//   return (
//     <>
//     <Header />
//     <div className="container mt-4">
//       <img src={picture} style={{ width: '100%', objectFit: 'cover' }} alt={type} />
//       <h1>{type} - LKR {price.toLocaleString()}</h1>
//       <h4>{location.address}, {location.city}</h4>
//       <p>
//         <strong>Bedrooms:</strong> {bedrooms} <br />
//         <strong>Tenure:</strong> {tenure} <br />
//         <strong>Description:</strong> {description}
//       </p>
//       <p>
//         <small className="text-muted">Added on {added.day} {added.month}, {added.year}</small>
//       </p>
//       <tabs>
//         <tablist>
//           <tab>Details</tab>
//           <tab>Floor Plan</tab>
//           <tab>Location</tab>
//         </tablist>
//         <tabpanel>
//           <h2>Details</h2>
//           <p>
//             <strong>Bedrooms:</strong> {bedrooms} <br />
//             <strong>Tenure:</strong> {tenure} <br />
//             <strong>Description:</strong> {description}
//           </p>
//         </tabpanel>
//         <tabpanel>
//           <h2>Floor Plan</h2>
//           <img src={picture} style={{ width: '100%', objectFit: 'cover' }} alt={type} />
//         </tabpanel>
//         <tabpanel>
//           <h2>Location</h2>
//           <iframe
//             title="property-location"
//             width="600"
//             height="450"
//             loading="lazy"
//             allowFullScreen
//             src={`https://www.google.com/maps/embed/v1/place?q=${location.latitude},${location.longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
//           />
//         </tabpanel>
//       </tabs>
//     </div>
//     </>
//   );
// };

// export default PropertyDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(null);
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    import("../../public/properties.json")
      .then((data) => {
        setProperties(data.properties);
        const foundProperty = data.properties.find((prop) => prop.id === id);
        setProperty(foundProperty);
      })
      .catch((error) => console.error("Error loading properties:", error));
  }, [id]);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  const { type, bedrooms, price, tenure, description, location, picture, added } = property;

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (isWished) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(item => item !== property.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsWished(false);
    } else {
      // Add to wishlist
      wishlist.push(property.id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWished(true);
    }
  };

  return (
    <div className="container mt-4">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={picture} style={{ width: "70%", height: "500px", objectFit: "cover" }} alt={type} />
      </div>
      <h1>{type} - LKR {price.toLocaleString()}</h1>
      <h4>{location.address}, {location.city}</h4>
      <p>
        <strong>Bedrooms:</strong> {bedrooms} <br />
        <strong>Tenure:</strong> {tenure} <br />
        <small className="text-muted">Added on {added.day} {added.month}, {added.year}</small>
      </p>
      <button 
        className={`btn ${isWished ? 'btn-danger' : 'btn-secondary'} mt-2`} 
        onClick={toggleWishlist}
      >
        <i className={`bi ${isWished ? 'bi-heart-fill' : 'bi-heart'}`}></i> Add to Wishlist
      </button>
      <br></br>
      <br></br>
      <Tabs>
        <TabList>
          <Tab>More Details</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>

        <TabPanel>
          <h2>More Details</h2>
          <p>{description}</p>
        </TabPanel>

        <TabPanel>
          <h2>Floor Plan</h2>
          <img
            src="https://via.placeholder.com/800x400?text=Floor+Plan"
            alt="Floor Plan"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </TabPanel>

        <TabPanel>
          <h2>Location</h2>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}, ${encodeURIComponent(
              location.city
            )}&output=embed`}
            title="Google Map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PropertyDetails;
