import React, { FC } from 'react'
import './blogHeader.css'
import { RiSearchFill } from 'react-icons/ri'
import leavesBg from '../../../images/gileaves-bg-w.jpg'

interface BlogHeaderProps {}

const BlogHeader: FC<BlogHeaderProps> = () => {
  return (
    <header id="blog-header">
      <div className="blog-header-container">
        <img
          src={leavesBg}
          alt=""
          className="blog-header_bg-image"
          style={{ background: `#FFFFFF url(${leavesBg}) no-repeat bottom center` }}
        />
        <div className="container">
          <div className="b-header_logo-inner">
            <div className="b-header_content">
              <div className="logo">
                <span>𝓁𝑜𝓇𝑒𝓂</span>
                <span>𝓲𝓹𝓼𝓾𝓶𝓼𝓲𝓷</span>
              </div>
              <div className="b-header_burger-button">
                <a href="adfsdf" className="b-header_toggle-burger">
                  <span className="b-header_button-line"></span>
                  <span className="b-header_button-line"></span>
                  <span className="b-header_button-line"></span>
                </a>
              </div>
              <div className="b-header_search-button">
                <div className="b-header_search-button_icon">
                  <RiSearchFill className="b-header_search-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BlogHeader
