const About = () => {
    return (
        <div className="container text-center">
            <section className="section">
                <h1>About Us</h1>
                <br />
                <div className="row center-cards">
                    <div className="row-cols-1 row-cols-md-2 g-3">
                        <div className="col-md-6">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    style={{ width: "18rem" }}
                                    src={require("../components/images/Sergio.png")}
                                    alt="Photo of Sergio Marquina property owner"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Sergio Marquina
                                    </h4>
                                    <div className="card-text">
                                        <p>
                                            &#x2022; Specialized in cosmetics
                                            dentistry
                                        </p>
                                        <p>
                                            &#x2022; Owner of Montreal biggest
                                            apple cider company.
                                        </p>
                                        <p>
                                            &#x2022; Studied Architecture in
                                            Italy and received his masters at
                                            the university of Montreal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    style={{ width: "18rem" }}
                                    src={require("../components/images/Gus.png")}
                                    alt="Photo of Gus Fring property owner"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">Gus Fring</h4>
                                    <div className="card-text">
                                        <p>
                                            &#x2022; Owner of Los Pollos
                                            Hermanos.
                                        </p>
                                        <p>
                                            &#x2022; He specializes in
                                            organizing apartment services like
                                            Maintenance, Security, Lease Renewal
                                            and Rent Collection...
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
                            <i className="bi bi-telephone-fill"></i> +1 (613)
                            256-7842
                        </span>
                        <br />
                        <br />
                        <img
                            className="card-img-top"
                            src={require("../components/images/Customer Service.png")}
                            alt="Customer Service on the phone"
                        />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h2>Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8107710820786!2d-75.65658422342734!3d45.35263197107235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08ecd10c04eb%3A0xda1dcfae058b5df2!2s2214%20Bank%20St%2C%20Ottawa%2C%20ON%20K1V%201J5!5e0!3m2!1sen!2sca!4v1689817759668!5m2!1sen!2sca"
                    width="1000"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="address">
                    <a href="https://goo.gl/maps/JaBeDgXKJ8Ujat818">
                        <i className="bi bi-geo-alt-fill"></i> 2214 Bank St,
                        Ottawa, ON K1V 1J5
                    </a>
                </div>
                <br />
                <div id="map"></div>
            </section>
        </div>
    );
};

export default About;
