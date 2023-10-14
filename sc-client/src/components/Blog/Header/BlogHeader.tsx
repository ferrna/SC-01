import React, { FC } from 'react'
import './blogHeader.css'

interface BlogHeaderProps {}

const BlogHeader: FC<BlogHeaderProps> = () => {
  return (
    <header id="blog-header">
      <div className="blog-header-container">
        <div className="blog-header_logo-container">
          <div className="blog-header_logo">
            <span>𝓁𝑜𝓇𝑒𝓂</span>
            <span>𝓲𝓹𝓼𝓾𝓶𝓼𝓲𝓷</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BlogHeader
