import { FC } from 'react'
import Productos from './Productos/Productos';
import Informacion from './Informacion/Informacion';
import HeroArt from './HeroArt/HeroArt';
import Services from './Services/Services';

interface HomepageProps {
  
}

const Homepage: FC<HomepageProps> = ({  }) => {
  return (
    <div style={{marginTop: "172px"}}>
      {/* <HeroArt /> */}
      <Services />
      <Productos />
      <Informacion />
    </div>
  )
}

export default Homepage;