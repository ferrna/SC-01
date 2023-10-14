import React, { FC } from 'react'
import './slider.css'
import slide_image from '../../../../images/IMG_9667.jpg'

interface SliderProps {}

const Slider: FC<SliderProps> = ({}) => {
  return (
    <div className="hero-slider">
      <div className="hero-slider-slides">
        <div className="hero-slider-slides-container">
          <div className="slide">
            <img src={slide_image} alt="" />
            <div className="slide-text">
              <div>
                <h1>Lorem ipsum, dolor</h1>
                <a href="asd">VER MAS</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slides-controls"></div>
      </div>
    </div>
  )
}

export default Slider
