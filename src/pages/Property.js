import { useHistory } from "react-router-dom";
import house1 from "../components/images/House (1).png";

const Property = () => {
    const history = useHistory();
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
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Property Type
                                    </button>
                                </h5>
                            </div>
                            <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                            >
                                <div className="card-body">
                                    <input
                                        type="checkbox"
                                        id="checkbox4"
                                        name="checkbox4"
                                    />
                                    <label
                                        htmlFor="checkbox4"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Apartment
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox5"
                                        name="checkbox5"
                                    />
                                    <label
                                        htmlFor="checkbox5"
                                        style={{ marginLeft: 3 + "px" }}
                                    >
                                        Condominium
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div
                                        className="card-header"
                                        id="headingThree"
                                    >
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Lease and Fees
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        className="collapse"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <input
                                                type="checkbox"
                                                id="checkbox7"
                                                name="checkbox7"
                                            />
                                            <label
                                                htmlFor="checkbox7"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Monthly Payments
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox8"
                                                name="checkbox8"
                                            />
                                            <label
                                                htmlFor="checkbox8"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Semi-Annual Payments
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9"
                                                name="checkbox9"
                                            />
                                            <label
                                                htmlFor="checkbox9"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Annual Payments
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div
                                        className="card-header"
                                        id="headingfour"
                                    >
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsefour"
                                                aria-expanded="false"
                                                aria-controls="collapsefour"
                                            >
                                                Included Amenities
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapsefour"
                                        className="collapse"
                                        aria-labelledby="headingfour"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <input
                                                type="checkbox"
                                                id="checkbox7"
                                                name="checkbox7"
                                            />
                                            <label
                                                htmlFor="checkbox7"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Laundry Machines
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox8"
                                                name="checkbox8"
                                            />
                                            <label
                                                htmlFor="checkbox8"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Kitchen Appliances
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9"
                                                name="checkbox9"
                                            />
                                            <label
                                                htmlFor="checkbox9"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Heating & Cooling
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9ew"
                                                name="checkbox9ew"
                                            />
                                            <label
                                                htmlFor="checkbox9ew"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Internet Access
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9ewd"
                                                name="checkbox9ewd"
                                            />
                                            <label
                                                htmlFor="checkbox9ewd"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Internet Access
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9ewa"
                                                name="checkbox9ewa"
                                            />
                                            <label
                                                htmlFor="checkbox9ewa"
                                                style={{ marginLeft: 3 + "px" }}
                                            >
                                                Gym
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header" id="headingfive">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefive"
                                            aria-expanded="false"
                                            aria-controls="collapsefive"
                                        >
                                            Policies
                                        </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapsefive"
                                    className="collapse"
                                    aria-labelledby="headingfive"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body">
                                        <input
                                            type="checkbox"
                                            id="checkbox7"
                                            name="checkbox7"
                                        />
                                        <label
                                            htmlFor="checkbox7"
                                            style={{ marginLeft: 3 + "px" }}
                                        >
                                            Pet Friendly
                                        </label>
                                        <br />
                                        <input
                                            type="checkbox"
                                            id="checkbox8"
                                            name="checkbox8"
                                        />
                                        <label
                                            htmlFor="checkbox8"
                                            style={{ marginLeft: 3 + "px" }}
                                        >
                                            Parking
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cards                 */}

                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 g-3">
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
                                        <small class="text-body-secondary">
                                            4 Bedroom, 2 Washroom
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                        <small class="text-body-secondary">
                                            2 Bedroom, 1 Washroom
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                className="card h-100"
                                onClick={switch_to_Forsale}
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
                                        <small class="text-body-secondary">
                                            3 Bedroom, 1 Washroom
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                className="card h-100"
                                onClick={switch_to_Forsale}
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
                                        <small class="text-body-secondary">
                                            1 Bedroom, 1 Washroom
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;
