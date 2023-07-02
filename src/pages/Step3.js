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
                            src={require("../components/images/GreenCheckMark.png")}
                            alt="..."
                        />
                        <small>Create Account/Sign in</small>
                    </div>
                </div>
                <div className="col" onClick={page2}>
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/GreenCheckMark.png")}
                            alt="..."
                        />
                        <small> Pre-Approved</small>
                    </div>
                </div>
                <div className="col" onClick={page3}>
                    <div className="img-with-text">
                        <img
                            src={require("../components/images/3-active.png")}
                            alt="..."
                        />
                        <small>Book an Appointment</small>
                    </div>
                </div>
            </div>
            {/* ######################################## */}
            <div className="container text-center">
                <section>
                    <form>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <label
                                htmlFor="validation04"
                                className="form-label"
                            >
                                Number of guest attending the tour
                            </label>
                            <select
                                className="form-select"
                                id="validation04"
                                required
                            >
                                <option selected disabled value="">
                                    Choose...
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select amount of guest attedning
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <label
                                htmlFor="validation07"
                                className="form-label"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="validation07"
                                required
                            />
                            <div className="invalid-feedback">
                                Please select a date.
                            </div>
                        </div>
                        <div className="col-12">
                            <br />
                            <button className="btn btn-primary" type="submit">
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Step1;
