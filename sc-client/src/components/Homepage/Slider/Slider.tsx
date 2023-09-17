import { FC, useEffect, useState } from 'react'
import './slider.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface SliderProps {
  
}

const Slider: FC<SliderProps> = ({ }) => {
  
  useEffect(() => {
    let index = 0;

    const slides = document.querySelectorAll('.slides');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot')
    //@ts-ignore
    dots[0].style.opacity = '1'

    slides.forEach((slide, index) => {
      //@ts-ignore
      slide.style.left=`${index*100}%`
    });
    const moveSlide = () =>{
      slides.forEach((slide) => {
        //@ts-ignore
        slide.style.transform=`translateX(-${index*100}%)`;
      });
    }

    nextBtn && nextBtn.addEventListener('click',()=>{
      if(index===slides.length-1) return index;
      index++;
      removeDotsOpacity();
      //@ts-ignore
      dots[index].style.opacity='1'
      moveSlide();
    });
    prevBtn && prevBtn.addEventListener('click',()=>{
      if(index===0) return index;
      index--;
      removeDotsOpacity();
      //@ts-ignore
      dots[index].style.opacity='1'
      moveSlide();
    });

    dots.forEach((dot,i)=>{
      dot.addEventListener("click",(e)=>{
        index=i;
        removeDotsOpacity();
        //@ts-ignore
        e.target.style.opacity='1'
        moveSlide();
      })
    });

    const removeDotsOpacity = () =>{
      dots.forEach((dot) => {
        //@ts-ignore
        dot.style.opacity='.2';
      });
    }

    const autoPlaySlide = () => {
      removeDotsOpacity();
      if(index===slides.length-1) index= -1;
      index++;
      //@ts-ignore
      dots[index].style.opacity='1'
      moveSlide();
    }
    setInterval(autoPlaySlide, 6000);
    
    return () => {
      nextBtn && nextBtn.removeEventListener('click',()=>{});
      prevBtn && prevBtn.removeEventListener('click',()=>{});
      dots.forEach((dot,i)=>{
        dot.removeEventListener("click",(e)=>{})
      });
    }
  }, [])
  
  return (
  <div className="comp_sli_main-wrapper">
    <div className="slider-btns">
      <span id="prev-btn"><FaAngleLeft /></span>
      <span id="next-btn"><FaAngleRight /></span>
    </div>
    <div className="slider-wrapper">
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972__340.jpg)'
        }}>
      </div>
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg)'
        }}>
      </div>
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758__340.jpg)'
        }}>
      </div>
      {/* 2nd */}
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972__340.jpg)'
        }}>
      </div>
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg)'
        }}>
      </div>
      <div className="slides" style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758__340.jpg)'
        }}>
      </div>  
    </div>
  </div>
  )
}

export default Slider;