import { FC } from 'react'
import Productos from './Productos/Productos';
import Informacion from './Informacion/Informacion';

interface HomepageProps {
  
}

const Homepage: FC<HomepageProps> = ({  }) => {
  return (
    <div>
      <Productos />
      <Informacion />
    </div>
  )
}

export default Homepage;