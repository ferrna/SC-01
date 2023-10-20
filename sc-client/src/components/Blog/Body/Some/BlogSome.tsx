import { FC } from 'react'
import './blogSome.css'
import Post from './post'

interface SomeProps {}

const BlogSome: FC<SomeProps> = () => {
  return (
    <div className="some">
      <div className="container">
        <div className="some-wrapper">
          <h2 className="section-title">Cosmetica &amp; añadidos</h2>
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

export default BlogSome
