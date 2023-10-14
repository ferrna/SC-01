import React, { FC } from 'react'
import './latest.css'
import post_image from '../../../../images/barimix-30-capsulas.jpg'
import post_image2 from '../../../../images/IMG-270x300.jpg'
import Post from './post'

interface LatestProps {}

const Latest: FC<LatestProps> = () => {
  return (
    <div className="latest">
      <div className="container">
        <div className="latest-wrapper">
          <h2 className="section-title">Research &amp; Science</h2>
          <div className="wrapper-row">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest
