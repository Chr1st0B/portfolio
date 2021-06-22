import allocinosh from "../images/Allocinosh.png"
import hotelosh from "../images/Hotelosh.png"

import React from "react";

import { useState } from 'react';
import Loader from "../assets/LoaderDayNight"


const Projects = () => {

    // Menu Day and Night
    const [mode, setMode] = useState('day')

    return(
        <div className={mode === 'day' ? 'homeDayBody' : 'homeNightBody'} >
            <div className="projects">
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
                <section className="projectsMasterBox1">
                    <div className="projectsBox1">
                        <h1>PROJECTS</h1>

                        <hr />
                    </div>
                </section>
                <section className="projectsMasterBox2">
                    <div className="projectsBox2">
                        <img src={allocinosh}/>
                        <p>kerg^fmezk fpkz kfe ^fke zepfk ^zpke fpfez^k ezpk</p>
                    </div>
                    <div className="projectsBox3">
                        <img src={hotelosh}/>
                        <p>kerg^fmezk fpkz kfe ^fke zepfk ^zpke fpfez^k ezpk</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects