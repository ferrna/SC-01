import React, { FC } from 'react'
import './blogFooter.css'

interface BlogFooterProps {}

const BlogFooter: FC<BlogFooterProps> = () => {
  return (
    <div className="blog-footer">
      <div className="blog-footer-wrapper">
        <div className="blog-footer-content">Desarrollado por È</div>
      </div>
    </div>
  )
}

export default BlogFooter
