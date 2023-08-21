import { FC } from 'react'
import { Informacion } from '../../components/Informacion/Informacion'

interface HomepageProps {}

export const Homepage: FC<HomepageProps> = ({}) => {
  return (
    <>
      <div>Homepage</div>
      <Informacion />
    </>
  )
}
