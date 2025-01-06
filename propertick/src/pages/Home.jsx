import Header from '../components/Header';
import Carousel from '../components/Carousel';
import SearchForm from '../components/SearchForm';  
import PropertyList from '../components/PropertyList';
import propertiesData from '../../public/properties.json';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Carousel />
            


        </div>
    )
}

export default Home;

// import React from 'react';
// import Header from '../components/Header';
// import Carousel from '../components/Carousel';
// import SearchForm from '../components/SearchForm';
// import PropertyList from '../components/PropertyList';
// import PropertyCard from '../components/PropertyCard';
// import propertiesData from '../../public/properties.json';
// import Footer from '../components/Footer';

// const Home = () => {
//   // Select random properties (e.g., 3 properties)
//   const featuredProperties = propertiesData.sort(() => 0.5 - Math.random()).slice(0, 3);

//   return (
//     <div>
//       <Carousel />
      
//       <div className="container mt-5">
//         <h2 className="mb-4">Featured Properties</h2>
//         <div className="row">
//           {featuredProperties.map(property => (
//             <div className="col-md-4 mb-4" key={property.id}>
//               <PropertyCard property={property} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;
