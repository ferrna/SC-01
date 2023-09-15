import React, { FC } from 'react'
import './heroArt.css'

interface HeroArtProps {
}

const HeroArt: FC<HeroArtProps> = ({  }) => {
  return (
    <div id="heroart">
      <div id="heroart-container">
        <section className="parallax-bg"></section>
        <section className="parallax-content">
          <div>
            <h1>Parallax section</h1>
            <p>Este texto acompaña al background parallax en su propia sección</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroArt;