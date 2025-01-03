import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Home, Partners, Project, Township} from "./pages";
import routes from "./routes/routes";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.township} element={<Township/>}/>
                <Route path={routes.project} element={<Project/>}/>
                <Route path={routes.partner} element={<Partners/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
