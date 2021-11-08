import React from 'react'
import Navigation from "./Views/Nav";
// eslint-disable-next-line no-unused-vars
import styles from './App.css'
import Home from './Views/Pages/Home'
import {
    Routes,
    Route,
} from "react-router-dom"
import Portfolio from "./Views/Pages/Portfolio";
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
