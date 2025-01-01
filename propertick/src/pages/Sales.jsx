import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import PropertyList from '../components/PropertyList';
import propertiesData from '../../public/properties.json';

const Sales = () => {
    return (
        <div>
            <Header />
            <SearchForm />
            <PropertyList properties={propertiesData.properties} />
        </div>
    )
}

export default Sales;