import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Home from "./components/Home"
import Me from "./components/Me"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Surprise from "./components/Surprise"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
            <Route path="/Me">
              <Me />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Surprise">
              <Surprise />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
