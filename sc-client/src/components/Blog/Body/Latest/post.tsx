import React, { FC } from 'react'
import './post.css'
import post_image from '../../../../images/IMG-270x300.jpg'

interface PostProps {
  image?: string
  category?: string
  title?: string
  date?: string
}

const Post: FC<PostProps> = () => {
  return (
    <div className="col-md-4 latest-post">
      <a href="asda">
        <div className="post-image">
          <img width="300" height="201" src={post_image} alt="" loading="lazy" />
        </div>
        <div className="post-content">
          <div className="container">
            <div className="post-category">Paul Clayton</div>
            <div className="post-title">Unsafe at Any Speed</div>
            <div className="post-date">2020-12-10</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Post
