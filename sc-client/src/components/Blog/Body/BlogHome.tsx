import { FC } from 'react'
import './blogHome.css'
import BlogHero from './Hero/BlogHero'
import BlogSome from './Some/BlogSome'
import BlogLatest from './Latest/BlogLatest'
import BlogSeguinos from './Seguinos/BlogSeguinos'
import BlogFooter from './Footer/BlogFooter'

interface BlogHomeProps {}

const BlogHome: FC<BlogHomeProps> = () => {
  return (
    <div id="blog-home" className="relative">
      <BlogHero />
      <BlogLatest />
      <BlogSeguinos />
      <BlogSome />
      <BlogFooter />
    </div>
  )
}

export default BlogHome
