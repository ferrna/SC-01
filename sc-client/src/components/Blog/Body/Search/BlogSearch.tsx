import React, { FC } from 'react'
import './blogSearch.css'

interface BlogSearchProps {}

const BlogSearch: FC<BlogSearchProps> = () => {
  return (
    <div className="blog-search">
      <div className="container">
        <div className="wrapper-row">
          <div className="search-articles col-8"></div>
          <div className="search-aside col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogSearch
