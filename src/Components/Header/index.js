import React from 'react'
import Intro from './Intro'
import Course from './Course'
import '../../Styles/Header.css'
import Wrapper from '../Wrapper'

const courses =[
    {imgUrl:"images/python.svg", name:"Python"},
    {imgUrl:"images/web-development.svg", name:"Web Development"},
    {imgUrl:"images/artificial-intelligence.svg", name:"Artificial Intelligence"},
    {imgUrl:"images/machine-learning.svg", name:"Machine Learning"},
    {imgUrl:"images/cyber-security.svg", name:"Cyber Security"},
    {imgUrl:"images/game-development.svg", name:"Game Development"},
]

const Header = (props) => {
    return (
        <Wrapper>
            <div className="header">
                <Intro />
                <div>
                    <h1 className="courses-head">Cutting edge courses to make your child future ready</h1>
                    <div className="courses">
                        {courses.map(course=>(
                            <Course key={course.name} imgUrl={course.imgUrl} name={course.name} />
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header;
