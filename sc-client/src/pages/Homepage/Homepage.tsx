import { FC } from 'react'
import { InformacionGeneral } from '../../components/InformacionGeneral/InformacionGeneral'

interface HomepageProps {}

export const Homepage: FC<HomepageProps> = ({}) => {
  return (
    <>
      <div>Homepage</div>
      <InformacionGeneral />
    </>
  )
}
