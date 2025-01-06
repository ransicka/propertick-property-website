const ContactUs = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3>Get in Touch</h3>
                    <p><strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka</p>
                    <p><strong>Phone:</strong> +94 11 123 4567</p>
                    <p><strong>Email:</strong> info@propertick.com</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3>Our Team</h3>
                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{height: '200px'}}>
                        <img src="https://hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg" alt="Our Team" className="img-fluid h-100" />
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <h3>Office</h3>
                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{height: '200px'}}>
                        <img src="./images/office.jpg" alt="Office" className="img-fluid h-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
