import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Home, Township} from "./pages";
import routes from "./routes/routes";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.township} element={<Township/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
