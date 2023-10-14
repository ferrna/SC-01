import React, { FC } from 'react'
import './blogHero.css'
import bh_image from '../../../../images/blog_farmaonline2x.png'
import bh_image_min from '../../../../images/blog_farmaonline2x-min.png'
import Slider from './Slider'

interface BlogHeroProps {}

const BlogHero: FC<BlogHeroProps> = ({}) => {
  return (
    <div className="blogHero hero">
      <div className="hero-container absolute">
        <div className="hero-image-texture absolute" />
        <img src={bh_image} alt="" className="hero-image-img" />
        <Slider />
      </div>
      <div>
        <img src={bh_image_min} alt="" className="hero-image-img clone" />
      </div>
    </div>
  )
}

export default BlogHero
