import { FC } from 'react'
import './blogHome.css'
import BlogHero from './Hero/BlogHero'
import Latest from './Latest/Latest'

interface BlogHomeProps {}

const BlogHome: FC<BlogHomeProps> = () => {
  return (
    <div id="blog-home" className="relative">
      <BlogHero />
      <Latest />
      <div className="bh-content">
        <section className="bh-body">asdpohjasfdhopásdhfohpsafphoas</section>
        <aside className="bh-aside"></aside>
      </div>
    </div>
  )
}

export default BlogHome
