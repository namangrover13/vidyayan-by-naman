import React from 'react';
import '../../Styles/Features.css'
import Feature from './Feature';

const featureOne=[
    {imgUrl:"images/logic1.svg", name:"Logic", txt:"For predicting & analysis"},
    {imgUrl:"images/evaluation1.svg", name:"Evaluation", txt:"Involves making judgement"},
    {imgUrl:"images/algorithms1.svg", name:"Algorithms", txt:"To make steps & rules"}
]
const featureTwo=[
    {imgUrl:"images/abstraction1.svg", name:"Abstraction", txt:"To remove unnecessary data"},  
    {imgUrl:"images/pattern1.svg", name:"Pattern", txt:"To make use of similarities"},  
    {imgUrl:"images/decomposition1.svg", name:"Decomposition", txt:"Break down a problem"}  
]

const Features = () => {
    return (
        <div className="features">
            <h1 className="features-head">Why Coding?</h1>
            <h5 className="features-tag">Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</h5>
            <div className="features-container">
                <div className="features-div">
                    {featureOne.map(feature=>(
                        <Feature imgUrl={feature.imgUrl} name={feature.name} txt={feature.txt} />
                    ))}
                </div>
                <div className="features-img">
                    <img alt="Features" src="images/coding2.svg" />
                </div>
                <div className="features-div">
                    {featureTwo.map(feature=>(
                        <Feature imgUrl={feature.imgUrl} name={feature.name} txt={feature.txt} />
                    ))}
                </div>
            </div>
            <button className="features-btn">Book a free class</button>
        </div>
    )
}

export default Features
