import React from 'react'
import Slider from './Slider';
import '../../Styles/Path.css'
import Wrapper from '../Wrapper';

const Path = () => {
    return (
        <Wrapper>
            <div className="path">
                <Slider />
                <div className="path-div">
                    <img className="path-banner" alt="Banner" src="images/banner-new.svg" />
                </div>
                <div className="path-div">
                    <img className="path-img" alt="Path" src="images/timeline.svg" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Path;
