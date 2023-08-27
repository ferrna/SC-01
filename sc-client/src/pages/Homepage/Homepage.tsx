import { FC } from 'react'
import Informacion from '../../components/Informacion/Informacion'
import Productos from '../../components/Productos/Productos'

interface HomepageProps {}

export const Homepage: FC<HomepageProps> = ({}) => {
  return (
    <>
      <Productos />
      <Informacion />
    </>
  )
}
