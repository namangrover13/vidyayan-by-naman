import React from 'react';
import '../../Styles/Header.css';

const Course = ({imgUrl, name}) => {
    return (
        <div className="course">
            <div className="course-img-div">
                <img alt={name} src={imgUrl} className="course-img" />
            </div>
            <h3 className="course-name">{name}</h3>
        </div>
    )
}

export default Course;
