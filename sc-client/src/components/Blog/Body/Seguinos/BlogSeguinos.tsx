import React, { FC } from 'react'
import './blogSeguinos.css'
import bh_image from '../../../../images/bh-image.jpg'
import { RiInstagramFill } from 'react-icons/ri'

interface BlogSeguinosProps {}

const BlogSeguinos: FC<BlogSeguinosProps> = () => {
  return (
    <div className="blog-seguinos">
      <div className="blog-seguinos-wrapper">
        <div className="blog-seguinos-inner">
          Follow us on <b>Instagram!</b>
          <br />
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="20%" y1="100%" x2="80%" y2="0%">
              <stop stopColor="#fdf497" offset="0%" />
              <stop stopColor="#fdf497" offset="5%" />
              <stop stopColor="#fd5949" offset="45%" />
              <stop stopColor="#d6249f" offset="60%" />
              <stop stopColor="#285AEB" offset="90%" />
            </linearGradient>
          </svg>
          <RiInstagramFill style={{ fill: 'url(#blue-gradient)' }} className="blog-seguinos-instagram-logo" />
        </div>
      </div>
    </div>
  )
}

export default BlogSeguinos
