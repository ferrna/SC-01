import React, { FC } from 'react'
import './blogHero.css'
import slide_image from '../../../../images/IMG_9667.jpg'
import Slider from './Slider'

interface BlogHeroProps {}

const BlogHero: FC<BlogHeroProps> = () => {
  return (
    <section className="blog-hero">
      <div className="container">
        {/* <div className="hero-image-texture" />
        <img src={bh_image} alt="" className="hero-image-img" />
        <Slider /> */}
        <section className="blog-hero-wrapper">
          <div className="wrapper-row">
            <div className="blog-hero-slider">
              <div className="blog-slider">
                <div className="slider-outer">
                  <div className="bh_slide">
                    <div className="bh_slide-image">
                      <img src={slide_image} alt="" />
                    </div>
                    <div className="bh_slide-text">
                      <div className="container">
                        <h2 className="bh-slide-heading"></h2>
                        <h1 className="bh_slide-title">
                          Meet our <br /> new SC chef: <br /> Edin Achuras
                        </h1>
                        <a href="dfsdf" className="bh_slide-seemore">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-hero-latest">
              <div className="blog-hero_latest-wrapper">
                <div className="blog-hero_latest-inner">
                  <div className="blog-hero_latest-inner-wrapper">
                    <h2>lo que se dice</h2>
                    <div className="b-hero_latest-posts">
                      <div>
                        <div className="fs-14">Helser Odina</div>
                        <a href="asdf">
                          <div className="b-hero_latest-posttitle">
                            Lorem ipsum dolor sit, amet aset adipisicing elit.
                          </div>
                        </a>
                      </div>
                      <div>
                        <div className="fs-14">Helser Odina</div>
                        <a href="asdf">
                          <div className="b-hero_latest-posttitle">
                            Lorem ipsum dolor sit, amet aset adipisicing elit.
                          </div>
                        </a>
                      </div>
                      <div>
                        <div className="fs-14">Helser Odina</div>
                        <a href="asdf">
                          <div className="b-hero_latest-posttitle">
                            Lorem ipsum dolor sit, amet aset adipisicing elit.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default BlogHero
