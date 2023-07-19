import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [t, i18n] = useTranslation("global");

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="MetroLiving Logo"
                    />
                    MetroLiving
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Property">
                                Property
                            </Link>
                        </li>
                        <button onClick={() => changeLanguage("en")}>EN</button>
                        <button onClick={() => changeLanguage("fr")}>FR</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
