import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Property from "./pages/Property";

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
            </Switch>
        </Router>
    );
};
export default App;
