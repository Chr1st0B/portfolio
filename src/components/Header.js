import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useState } from 'react';
import Power from "../assets/PowerNightDay"

const Header = () => {

    // Menu Day and Night
    const [mode, setMode] = useState('day')

    // Menu Home
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <div className={mode === 'day' ? 'homeDay' : 'homeNight'} >
            <header className="bigBox">
                <section className={`box ${showLinks ? "show-nav" : "hide-nav"}`}>
                    <button className="navbar_burger" onClick={handleShowLinks}>
                        <span className="burger-bar"></span>
                    </button>
                    <div className="liens">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Me">Me</Link>
                            </li>
                            <li>
                                <Link to="/Projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Surprise">Surprise</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="power">
                    <div onClick={() => {
                        if (mode === 'day') {
                            setMode('night')
                        } else {
                            setMode('day')
                        }
                        }} >
                        <Power/>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header