import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import "./Slider.scss";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex === dataSlider.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 1
      ? setSlideIndex(dataSlider.length)
      : setSlideIndex(slideIndex - 1);
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {dataSlider.map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slider;
