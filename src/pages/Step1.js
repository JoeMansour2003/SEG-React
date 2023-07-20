import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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
                <div className="col" onClick={page1}>
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/1-active.png")}
                            alt="..."
                        />
                        <small onClick={page1}>Create Account/Sign in</small>
                    </div>
                </div>
                <div className="col">
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/2-Gray.png")}
                            alt="..."
                        />
                        <small>Pre-Approved</small>
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
            <div className="row ">
                <h2>Create Account/Sign in</h2>
            </div>
            {/* /################################################### */}

            <div className="d-flex justify-content-center">
                <div className="row align-items-center">
                    <form
                        className="row g-3 needs-validation"
                        novalidate
                        action="./Step2"
                    >
                        <div className="col-md">
                            <br />
                            <br />
                            <label
                                htmlFor="validation0124"
                                className="form-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validation0124"
                                required
                            />
                            <label
                                htmlFor="validation01247"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation01247"
                                required
                            />
                            <br />
                            <div className="valid-feedback">Looks good!</div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container text-center">
                <section className="section">
                    <form
                        className="row g-3 needs-validation"
                        Validate
                        action="./Step2"
                    >
                        <hr className="solid"></hr>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation01"
                                className="form-label"
                            >
                                First name
                            </label>
                            <input
                                type="text"
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
                                Last name
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
                                htmlFor="validationUsername"
                                className="form-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validationUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation03"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validation03"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <br />
                            <button className="btn btn-primary" type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step1;
