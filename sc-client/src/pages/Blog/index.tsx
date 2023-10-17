import React, { FC } from 'react'
import './index.css'
import BlogHeader from '../../components/Blog/Header/BlogHeader'
import BlogHome from '../../components/Blog/Body/BlogHome'

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <div id="blog">
      {/* <BlogHeader /> */}
      <main className="blog-main">
        <div className="blog-main_inner">
          <BlogHome />
        </div>
      </main>
    </div>
  )
}

export default Blog
