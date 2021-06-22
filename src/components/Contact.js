import React from "react";

import { useState } from 'react';
import Loader from "../assets/LoaderDayNight"

const Contact = () => {

    // Menu Day and Night
    const [mode, setMode] = useState('day')

    return(
        <div className={mode === 'day' ? 'homeDayBody' : 'homeNightBody'} >
            <div className="contact">
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
                <section className="contactsMasterBox1">
                    <div className="contactBox1">
                        <h1>CONTACT ME</h1>

                        <hr />
                    </div>
                </section>
                <div className="contactBox2">
                    <input  className="" type="text" placeholder="Name" />

                    <input  className="" type="email" placeholder="Email" />

                    <input  className="" type="text" placeholder="Subject" />

                    <textarea  className="" cols="30" rows="10" placeholder="Message"></textarea>

                    <button className="" >CONTACT ME</button>
                </div>
            </div>
        </div>
    )
}

export default Contact