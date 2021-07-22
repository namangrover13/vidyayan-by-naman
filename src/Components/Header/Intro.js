import React from 'react';
import '../../Styles/Intro.css'

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-content">
                <h1 style={{ color: "#FB5B16" }} className="intro-head">Creating Future</h1>
                <h1 className="intro-head">Tech Leader</h1>
                <p className="intro-text">Live coding classes for age 6 -15 to help your
                    child learn to code</p>
                    <button className="intro-btn">Join Now</button>
            </div>
            <div>
                <img alt="Introduction" className="intro-img" src="images/coding1.svg" />
            </div>
        </div>
    )
}

export default Intro
