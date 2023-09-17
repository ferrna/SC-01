import { FC, useEffect, useState } from 'react'
import './slider.css'
import img1 from '../HeroArt/Hands_Body.jpg'

interface SliderProps {
  
}

const Slider: FC<SliderProps> = ({ }) => {
  const [counter, setCounter] = useState(1)
  const [traslate, setTraslate] = useState(0)
  useEffect(() => {
    setInterval(function () {
        //@ts-ignore
        if(counter > 3){
          setCounter(1);
        } else {
          setCounter(counter+1)
        }
      }, 5000);
  }, [])
  return (
    <div id="comp_slider">
        <section id="comp_slider-container">
            <div className="comp_slider-buttons">
                <button>Button 1</button>
                <button>Button 2</button>
            </div>
            <div className="comp_slider-content">
                <div className="comp_slider-item">
                </div>
                <div className="comp_slider-item">
                </div>
                <div className="comp_slider-item">
                </div>
                <div className="comp_slider-item">
                </div>
                <div className="comp_slider-item">
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slider;