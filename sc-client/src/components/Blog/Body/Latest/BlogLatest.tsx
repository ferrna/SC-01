import { FC } from 'react'
import './blogLatest.css'
import post_image from '../../../../images/IMG_9667.jpg'

interface BlogLatestProps {}

const BlogLatest: FC<BlogLatestProps> = () => {
  return (
    <div className="blog-latest">
      <div className="container">
        <div className="blog-latest-wrapper">
          <div className="latest-post-title">Unsafe at Any Speed</div>
          <div className="wrapper-row">
            <div className="blog-latest_post">
              <a href="asda">
                <div className="post-image">
                  <img width="300" height="201" src={post_image} alt="" loading="lazy" />
                </div>
                <div className="post-content" lang="es">
                  <div className="container">
                    <div className="d-flex-center">
                      <div className="post-author">Autor: Autor desconocido</div>
                      <div className="post-date">2020-12-10</div>
                    </div>
                    <div className="post-introduction">
                      <p>
                        Imaginar que un tren abarca casi la totalidad del aeropuerto en cuanto nunca salga de su
                        linea de embarque a su nueva ciudad, por tanto queda expuesto un sinfin de numerologia
                        contingente.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="blog-latest_leer-mas">Leer más...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLatest
