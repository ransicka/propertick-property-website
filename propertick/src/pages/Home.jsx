// import Header from '../components/Header';
// import Carousel from '../components/Carousel';
// import SearchForm from '../components/SearchForm';  
// import PropertyList from '../components/PropertyList';
// import propertiesData from '../../public/properties.json';
// import Footer from '../components/Footer';


// const Home = () => {
//     return (
//         <div>
//             <Carousel />
            


//         </div>
//     )
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import HomePropertyCard from '../components/HomePropertyCard';
import propertiesData from '../../public/properties.json';

const Home = () => {
  // Use the first 3 properties from the JSON file
//   const featuredProperties = propertiesData.slice(0, 3);
    const featuredProperties = propertiesData.properties.slice(0, 3);
    
    

return (
    <div>
        {/* Carousel */}
        <Carousel />

        {/* Site Description */}
        <div className="container mt-5">
            <h2 className="text-center">Welcome to Your Dream Property Finder</h2>
            <p className="text-center mt-3">
                Explore the best properties in the market with ease. Whether you're looking for a cozy apartment, 
                a luxurious villa, or a family-friendly home, we have it all. Our platform connects you with 
                the finest properties tailored to meet your needs and budget.
            </p>

            <div className="container mt-5 text-center">
                <img src="../images/Family.jpeg" alt="Family" className="img-fluid" />
            </div>
        </div>

        

      
        <div className="container mt-5">
            <h3 className="mb-4">Featured Properties</h3>
            <div className="row">
                {featuredProperties.map((property) => (
                    <div className="col-md-4 mb-4" key={property.id}>
                        <HomePropertyCard property={property} />
                    </div>
                ))}
            </div>
            <div className="container mt-5 text-center">
                <Link to="/properties" className="btn btn-primary">View More Properties</Link>
            </div>
            <br />
            <br />
        </div>
        

    </div>

  );
};

export default Home;

