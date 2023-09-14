import React, { FC } from 'react'
import './heroArt.css'

interface HeroArtProps {
}

const HeroArt: FC<HeroArtProps> = ({  }) => {
  return (
    <div id="heroart">
        <div id="heroart-heroimage"></div>
        <div id="heroart-container">
        </div>
    </div>
  )
}

export default HeroArt;