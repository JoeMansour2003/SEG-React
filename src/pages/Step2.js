import { useHistory } from "react-router-dom";
const Step1 = () => {
    const history = useHistory();

    const page1 = () => {
        history.push("/Step1");
    };
    const page2 = () => {
        history.push("/Step2");
    };
    const page3 = () => {
        history.push("/Step3");
    };
    return (
        <div className="container text-center">
            <div className="row text-muted">
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/GreenCheckMark.png")}
                            alt="..."
                            onClick={page1}
                        />
                        <small onClick={page1}>Create Account/Sign in</small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/2-active.png")}
                            alt="..."
                            onClick={page2}
                        />
                        <small onClick={page2}>Pre-Approved</small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/3-Gray.png")}
                            alt="..."
                        />
                        <small>Book an Appointment</small>
                    </div>
                </div>
            </div>
            {/* ######################################## */}
            <div className="container text-center">
                <section className="section">
                    <h2>Pre-Approved</h2>
                    <form className="row g-3 needs-validation" action="./Step3">
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation01"
                                className="form-label"
                            >
                                Sin Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="validation01"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation02"
                                className="form-label"
                            >
                                Current Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation02"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation12"
                                className="form-label"
                            >
                                Current Emploment
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation12"
                                required
                            />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation03"
                                className="form-label"
                            >
                                Annual Income
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="validation03"
                                required
                            />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation0134"
                                className="form-label"
                            >
                                Reference Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation0134"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation02"
                                className="form-label"
                            >
                                Reference Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validation02"
                                required
                            />
                            <div className="invalid-feedback">
                                Plaese enter a valid email
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-4">
                                <br />
                                <label
                                    htmlFor="validation04"
                                    className="form-label"
                                >
                                    Relationship Status
                                </label>
                                <select
                                    className="form-select"
                                    id="validation04"
                                    required
                                >
                                    <option selected disabled value="">
                                        Choose...
                                    </option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select relationship status
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="invalidCheck"
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="invalidCheck"
                                    >
                                        Authorization to run a credit check
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step1;
