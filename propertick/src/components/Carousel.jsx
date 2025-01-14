

const Carousel = () => {
    return (
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../images/AdobeStock_452122166.jpeg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/MATTS-PHOTOGRAPHY_PROPERTY-001.jpg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/AdobeStock_316224111.jpeg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/AdobeStock_478981305.jpeg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/AdobeStock_455072172.jpeg" className="d-block w-100" style={{height:'400px', objectFit:'cover'}} alt="..." />
                </div>
            </div>
            {/* Slider buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>

    )
}

export default Carousel;