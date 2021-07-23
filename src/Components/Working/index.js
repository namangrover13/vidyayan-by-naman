import React from 'react'
import Wrapper from '../Wrapper';
import Step from './Step';

const steps = [
    { id: 1, name: "Book", txt: "Book a free coding classes with us. You just need a laptop with good internet connectivity" },
    { id: 2, name: "Book", txt: "Book a free coding classes with us. You just need a laptop with good internet connectivity" },
    { id: 3, name: "Book", txt: "Book a free coding classes with us. You just need a laptop with good internet connectivity" },
    { id: 4, name: "Book", txt: "Book a free coding classes with us. You just need a laptop with good internet connectivity" },
    { id: 5, name: "Book", txt: "Book a free coding classes with us. You just need a laptop with good internet connectivity" },
]

const Working = () => {
    return (
        <Wrapper>
            <div className="working">
                <h1 className="working-head">How it Works</h1>
                <div className="working-div">
                    <img className="working-img" alt="Working" src="images/coding3.svg" />
                    <div className="working-step">
                        {steps.map(step=>(
                            <Step key={step.id} id={step.id} name={step.name} txt={step.txt} />
                        ))}
                    </div>
                </div>
                <img className="working-banner" alt="Banner" src="images/banner-new.svg" />
            </div>
        </Wrapper>
    )
}

export default Working
