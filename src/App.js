import React from 'react'
import Navigation from "./Views/Layout/Nav";
import Body from "./Views/Layout/Body";
import styles from './App.css'
import Home from './Views/Pages/Home'
import {
    Routes,
    Route,
    Link
} from "react-router-dom"
import Portfolio from "./Views/Pages/Portfolio";
import {Button} from "react-bootstrap";
import Services from "./Views/Pages/Services";
import Contact from "./Views/Pages/Contact";

const App = () => {
    return (
        <>
            <div className={'App'}>
                <Navigation/>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/portfolio'} element={<Portfolio />}/>
                    <Route path={'/contact'} element={<Contact />}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
