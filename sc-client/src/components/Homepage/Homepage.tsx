import { FC } from 'react'
import Productos from './Productos/Productos';
import Informacion from './Informacion/Informacion';
import HeroArt from './HeroArt/HeroArt';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import './homepage.css'

interface HomepageProps {
  
}

const Homepage: FC<HomepageProps> = ({  }) => {
  return (
    <div id="homepage">
      <Slider />
      {<HeroArt />}
      <Services />
      <Productos />
      <Informacion />
    </div>
  )
}

export default Homepage;