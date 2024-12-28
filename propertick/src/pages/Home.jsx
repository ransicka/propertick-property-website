import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <h1>This is Home</h1>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            
            <button type="button" className="btn btn-link">Link</button>
        </div>
    )
}

export default Home;