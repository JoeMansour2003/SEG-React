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
                <div className="col" onClick={page1}>
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/1-active.png")}
                            alt="..."
                        />
                        <small>Create Account/Sign in</small>
                    </div>
                </div>
                <div className="col" onClick={page2}>
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/2-Gray.png")}
                            alt="..."
                        />
                        <small>Pre-Approved</small>
                    </div>
                </div>
                <div className="col" onClick={page3}>
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
            <form className="row g-3 needs-validation" action="./Step2">
                <button type="submit" className="btn btn-primary col-md-1 ">
                    Log in
                </button>
            </form>

            <hr className="solid"></hr>

            <div className="container text-center">
                <section className="section">
                    <form
                        className="row g-3 needs-validation"
                        Validate
                        action="./Step2"
                    >
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
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="validation03"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid phone number.
                            </div>
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
