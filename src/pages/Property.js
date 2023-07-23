import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import house1 from "../components/images/House (1).png";

const Property = () => {
    const history = useHistory();
    const [hideCards, setHideCards] = useState({
        toronto: false,
        ottawa: false,
        gatineau: false,
        kingston: false,
    });

    const fetch = () => {
        var get = document.getElementById("get").value;
        document.getElementById("put").value = get;
    };

    const fetch2 = () => {
        var put = document.getElementById("put").value;
        document.getElementById("get").value = put;
    };

    const switch_to_Forsale = () => {
        history.push("/ForSale");
    };

    const handleCheckboxChange = (checkboxId) => {
        setHideCards((prevState) => ({
            ...prevState,
            [checkboxId]: !prevState[checkboxId],
        }));
    };

    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-3">
                    <div id="accordion">
                        <label htmlFor="customRange1" className="form-label">
                            Max Price
                        </label>
                        <input
                            className="form-control text-center"
                            type="number"
                            id="put"
                            onChange={fetch2}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="1000"
                            max="10000"
                            id="get"
                            onChange={fetch}
                        />

                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Location
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                            >
                                <div className="card-body">
                                    <input
                                        type="checkbox"
                                        id="checkbox1"
                                        name="checkbox1"
                                        onChange={() =>
                                            handleCheckboxChange("ottawa")
                                        }
                                    />
                                    <label
                                        htmlFor="checkbox1"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Ottawa
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox2"
                                        name="checkbox2"
                                        onChange={() =>
                                            handleCheckboxChange("toronto")
                                        }
                                    />
                                    <label
                                        htmlFor="checkbox2"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Toronto
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox12438"
                                        name="checkbox12438"
                                        onChange={() =>
                                            handleCheckboxChange("gatineau")
                                        }
                                    />
                                    <label
                                        htmlFor="checkbox12438"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Gatineau
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox124389"
                                        name="checkbox124389"
                                        onChange={() =>
                                            handleCheckboxChange("kingston")
                                        }
                                    />
                                    <label
                                        htmlFor="checkbox124389"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Kingston
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox3"
                                        name="checkbox3"
                                    />
                                    <label
                                        htmlFor="checkbox3"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Montreal
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Add other cards if you have more sections */}
                    </div>
                </div>

                {/* cards */}
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {/* Conditionally render the cards based on the checkbox states */}
                        {!hideCards.ottawa && (
                            <div className="col">
                                <div
                                    onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/images/House (1).png")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            5883 Rue Hutchison, Montreal
                                        </h5>
                                        <p className="card-text">$2300</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                4 Bedroom, 2 Washroom
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!hideCards.toronto && (
                            <div className="col">
                                <div
                                    onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/images/House (2).png")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            120 Playfair Ave, Toronto
                                        </h5>
                                        <p className="card-text">$3841</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                2 Bedroom, 1 Washroom
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!hideCards.gatineau && (
                            <div className="col">
                                <div
                                    onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/images/House (3).png")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            341 Spartan Ave, Ottawa
                                        </h5>
                                        <p className="card-text">$7037</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                3 Bedroom, 1 Washroom
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!hideCards.kingston && (
                            <div className="col">
                                <div
                                    onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/images/House (4).png")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            332 Emerald St, Kingston
                                        </h5>
                                        <p className="card-text">$1200</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                1 Bedroom, 1 Washroom
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;
