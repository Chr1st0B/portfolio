import css from "../images/css-3.svg"
import html from "../images/html.svg"
import js from "../images/javascript.svg"
import react from "../images/react.svg"

import React from "react";

import { useState } from 'react';
import Loader from "../assets/LoaderDayNight"

const Me = () => {

    // Menu Day and Night
    const [mode, setMode] = useState('day')

    return(
        <div className={mode === 'day' ? 'homeDayBody' : 'homeNightBody'} >
            <div className="me">
                <div className="loader">
                    <div onClick={() => {
                        if (mode === 'day') {
                            setMode('night')
                        } else {
                            setMode('day')
                        }
                        }} >
                        <Loader/>
                    </div>
                </div>
                <section className="meMasterBox1">
                
                    <div className="meBox1">
                        <h1>PRESENTATION</h1>

                        <hr />
                    </div>
                    <div className="meBox2">
                        <p>
                        Je me présente, erolngeptrkrhg flmreglm jfezn knrlke gkrnmer gnnflk kznnf kzlngelknm glen mzn gerlkgmn regkner lmngrlemkn g
                        erogjgr reg, zêp kfze^amù; l fez ,fml,z a kfrz^kzep.
                        </p>
                    </div>
                    <div className="meBox3">
                        <h2>SKILLS</h2>

                        <hr />
                    </div>
                </section>
                <section className="meMasterBox2">
                    <div className="meBox4">

                        <h3>DEVELOPPEMENT</h3>

                        <hr />

                        <p><img src={html} />HTML:</p>
                        <div className="bar">
                            <div className="skills html">90%</div>
                        </div>

                        <p><img src={css} />CSS:</p>
                        <div className="bar">
                            <div className="skills css">80%</div>
                        </div>

                        <p><img src={js} />JavaScript:</p>
                        <div className="bar">
                            <div className="skills js">70%</div>
                        </div>

                        <p><img src={react} />React:</p>
                        <div className="bar">
                            <div className="skills react">65%</div>
                        </div>

                    </div>
                    <div className="meBox5">

                        <h3>SYSTEME/RESEAUX</h3>

                        <hr />

                        <p>Vmware Workstation:</p>
                        <div className="bar">
                            <div className="skills vmware">80%</div>
                        </div>

                        <p>Serveur Windows/Linux:</p>
                        <div className="bar">
                            <div className="skills srv">70%</div>
                        </div>

                        <p>Base de données:</p>
                        <div className="bar">
                            <div className="skills bdd">70%</div>
                        </div>

                        <p>Nagios/GLPI:</p>
                        <div className="bar">
                            <div className="skills supervision">65%</div>
                        </div>
                        
                        {/* <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style="width: 94%;">
                            <span class="skill">
                                <i class="fa fa-html5 fa-2x"></i>
                                HTML5<i class="val">94%</i>
                            </span>
                        </div>

                        <div class="progress-bar progress-bar-blue" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style="width: 94%;">
                            <span class="skill">
                                <i class="fa fa-css3 fa-2x"></i>
                                            CSS
                                <i class="val">94%</i>
                            </span>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Me