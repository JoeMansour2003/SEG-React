const About = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are a team of professionals dedicated
                to providing high-quality services to our clients.
            </p>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                >
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
