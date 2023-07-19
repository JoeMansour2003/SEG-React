const About = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are a team of professionals dedicated
                to providing high-quality services to our clients.
            </p>
            <section className="section">
                <div className="container text-center">
                    <h1>About Us</h1>
                    <br />
                    <div className="row center-cards">
                        <div className="row">
                            <div className="col-md-6">
                                <div
                                    className="card"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        className="card-img-top"
                                        src={require("../components/images/Sergio.png")}
                                        alt="Photo of Sergio Marquina property owner"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Sergio Marquina
                                        </h4>
                                        <div className="card-text">
                                            <p>
                                                &#x2022; Specialized in
                                                cosmetics dentistry
                                            </p>
                                            <p>
                                                &#x2022; Owner of Montreal
                                                biggest apple cider company.
                                            </p>
                                            <p>
                                                &#x2022; Studied Architecture in
                                                Italy and received his masters
                                                at the university of Montreal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="card"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        className="card-img-top"
                                        src={require("../components/images/Gus.png")}
                                        alt="Photo of Gus Fring property owner"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Gus Fring
                                        </h4>
                                        <div className="card-text">
                                            <p>
                                                &#x2022; Owner of Los Pollos
                                                Hermanos.
                                            </p>
                                            <p>
                                                &#x2022; He specializes in
                                                organizing apartment services
                                                like Maintenance, Security,
                                                Lease Renewal and Rent
                                                Collection...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Opening Hours</h2>
                            <br />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>9:00am - 7:30pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>9:00am - 7:30pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>9:00am - 7:30pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>9:00am - 7:30pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>9:00am - 6:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9:00am - 3:00pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <h2>Phone Number</h2>
                            <span>
                                <i className="bi bi-telephone-fill"></i> +1
                                (613) 256-7842
                            </span>
                            <br />
                            <br />
                            <img
                                className="card-img-top"
                                src="website photos/contact us.png"
                                alt="staff on the phone"
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Location</h2>
                    <div className="address">
                        <a href="https://goo.gl/maps/JaBeDgXKJ8Ujat818">
                            <i className="bi bi-geo-alt-fill"></i> 2214 Bank St,
                            Ottawa, ON K1V 1J5
                        </a>
                    </div>
                    <br />
                    <div id="map"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
