import house1 from "../components/images/House (1).png";

const Property = () => {
    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-3">
                    <div id="accordion">
                        <label htmlFor="customRange1" className="form-label">
                            Price Range
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            id="customRange1"
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
                                        Collapsible Group Item #1
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
                                    <label htmlFor="checkbox1">
                                        Checkbox 1
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox2"
                                        name="checkbox2"
                                    />
                                    <label htmlFor="checkbox2">
                                        Checkbox 2
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox3"
                                        name="checkbox3"
                                    />
                                    <label htmlFor="checkbox3">
                                        Checkbox 3
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
                                        Collapsible Group Item #2
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
                                    <label htmlFor="checkbox4">
                                        Checkbox 4
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox5"
                                        name="checkbox5"
                                    />
                                    <label htmlFor="checkbox5">
                                        Checkbox 5
                                    </label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        id="checkbox6"
                                        name="checkbox6"
                                    />
                                    <label htmlFor="checkbox6">
                                        Checkbox 6
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
                                                Collapsible Group Item #3
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
                                            <label htmlFor="checkbox7">
                                                Checkbox 7
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox8"
                                                name="checkbox8"
                                            />
                                            <label htmlFor="checkbox8">
                                                Checkbox 8
                                            </label>
                                            <br />
                                            <input
                                                type="checkbox"
                                                id="checkbox9"
                                                name="checkbox9"
                                            />
                                            <label htmlFor="checkbox9">
                                                Checkbox 9
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="..."
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="..."
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a short card.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="..."
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    src="..."
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div>
            <div className="row">
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                width="200px"
                                height="300px"
                                object-fit="cover"
                                src={house1}
                                className="img-fluid rounded-start"
                                alt="House"
                            />
                            <div class="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={house1}
                                className="card-img-top"
                                alt="House"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={house1}
                                className="card-img-top"
                                alt="House"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={house1}
                                className="card-img-top"
                                alt="House"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={house1}
                                className="card-img-top"
                                alt="House"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={house1}
                                className="card-img-top"
                                alt="House"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default Property;
