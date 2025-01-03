import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Associations, Contact, Home, Leisure, Partners, Project, Tourism, Township} from "./pages";
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
                <Route path={routes.association} element={<Associations/>}/>
                <Route path={routes.tourism} element={<Tourism/>}/>
                <Route path={routes.leisure} element={<Leisure/>}/>
                <Route path={routes.contact} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
