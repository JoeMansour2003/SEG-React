import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Routes>
        </Router>
    );
};
export default App;
