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
    // Menu sera fermé par défault "false"
    const [showLinks, setShowLinks] = useState(false)

    // Fonction pour modifier la barre
    // On éditera seulement la  valeur si elle est différent de "false"
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <div className={mode === 'day' ? 'homeDay' : 'homeNight'} >
            <header className="bigBox">
                <section className={`box ${showLinks ? "show-nav" : "hide-nav"}`}> {/* si showLinks est à "true" : met la classe "show-nav" (nouvelle classe intialisé en CSS) sinon met la classe "hide-nav" (celle par défaut qui est le "false") */}
                    <button className="navbar_burger" onClick={handleShowLinks}> {/* ajoute la fonction handleShowLinks */}
                        <span className="burger-bar"></span>
                    </button>
                    <div className="liens">
                        <ul>
                            <li className="slideInDown-1">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="slideInDown-2">
                                <Link to="/Me">Me</Link>
                            </li>
                            <li className="slideInDown-3">
                                <Link to="/Projects">Projects</Link>
                            </li>
                            <li className="slideInDown-4">
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li className="slideInDown-5">
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