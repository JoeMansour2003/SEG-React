import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Property from "./pages/Property";
import ForSale from "./pages/ForSale";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Services">
                    <Services />
                </Route>
                <Route path="/Property">
                    <Property />
                </Route>
                <Route path="/ForSale">
                    <ForSale />
                </Route>
                <Route path="/Step1">
                    <Step1 />
                </Route>
                <Route path="/Step2">
                    <Step2 />
                </Route>
                <Route path="/Step3">
                    <Step3 />
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
