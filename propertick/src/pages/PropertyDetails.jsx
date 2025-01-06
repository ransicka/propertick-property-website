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

  const { type, title, bedrooms, price, tenure, description, location, picture, added, floorplan } = property;

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
      <h1>{title}</h1>
      <div className="carousel slide" id="carouselDemo" data-bs-wrap="true" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <img src={picture.main} className="w-75" />
          </div>

          <div className="carousel-item text-center" data-bs-interval="2000">
              <img src={picture.thumb1} className="w-75" />              
          </div>

          <div className="carousel-item text-center">
              <img src={picture.thumb2} className="w-75" />
          </div>

          <div className="carousel-item text-center">
              <img src={picture.thumb3} className="w-75" />          
          </div>

          <div className="carousel-item text-center">
            <img src={picture.thumb4} className="w-75" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDemo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselDemo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

        <div className="carousel-indicators">
          <button type="button" className="active" data-bs-target="#carouselDemo" data-bs-slide-to="0">
            <img src={picture.main} />
          </button>

          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="1">
            <img src={picture.thumb1} />
          </button>

          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="2">
            <img src={picture.thumb2} />
          </button>

          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="3">
            <img src={picture.thumb3} />
          </button>

          <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="4">
            <img src={picture.thumb4} />
          </button>

        </div>

      </div>

      <br />

      
      <h4><i className='bi bi-geo-alt-fill'></i> {location.address}, {location.city}</h4>
      <p>
        <strong><i className='bx bxs-bed'></i> Bedrooms:</strong> {bedrooms} <br />
        <strong><i className="bi bi-key-fill"></i> Tenure:</strong> {tenure} <br />
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
          <img src={floorplan} alt="Floor Plan" style={{ width: "50%", objectFit: "cover" }}/>
          <br />
          <br />
        </TabPanel>

        <TabPanel>
          <h2>Location</h2>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}, ${encodeURIComponent(
              location.city
            )}&output=embed`}
            title="Google Map"
            width="100%"
            height="500"
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
