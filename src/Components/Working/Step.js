import React from 'react';
import '../../Styles/Working.css';

const Step = ({id, name, txt}) => {
    return (
        <div className="step">
            <div className="step-id">{id}</div>
            <div className="step-content">
                <h2 className="step-name">{name}</h2>
                <h2 className="step-txt">{txt}</h2>
            </div>
        </div>
    )
}

export default Step
