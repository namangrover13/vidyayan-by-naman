import React from "react";
import "../../Styles/Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const data=[
  {imgUrl:"images/c-plus-plus.jpg", name:"Introduction to Coding"},
  {imgUrl:"images/java.jpg", name:"Advance Coding"},
  {imgUrl:"images/web-development.jpg", name:"Web App Development"},
  {imgUrl:"images/android.jpg", name:"Android App Development"},
  {imgUrl:"images/machine-learning.jpg", name:"Machine Learning"},
  {imgUrl:"images/python.jpg", name:"Python"},
]
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };
  return (
    <div className="slider">
      <Carousel responsive={responsive} autoPlaySpeed={2000} autoPlay={true} showDots={true}>
        {data.map((product,i) => (
          
          <div key={i} className="slider-card">
            <img
              alt={product.name}
              className="slider-image"
              style={{borderRadius: "5px"}}
              src={product.imgUrl}
            />
            <h2 className="slider-name">{product.name}</h2>
            <button className="slider-button">KNOW MORE</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
