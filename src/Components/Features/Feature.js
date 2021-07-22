import React from 'react'

const Feature = ({imgUrl, name, txt}) => {
    return (
        <div className="feature">
            <img alt={name} src={imgUrl} className="feature-img" />
            <div className="feature-div">
                <h3 className="feature-head">{name}</h3>
                <h5 className="feature-txt">{txt}</h5>
            </div>
        </div>
    )
}

export default Feature
