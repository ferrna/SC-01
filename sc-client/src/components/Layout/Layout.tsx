import { FC } from 'react'
import { Homepage } from '../../pages/Homepage/Homepage'
import './Layout.styles.css'
import { Route, Routes } from 'react-router-dom'
import { Busqueda } from '../../pages/Busqueda/Busqueda'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
  return (
    <div id="comp_lay_main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/busqueda" element={<Busqueda />} />
      </Routes>
    </div>
  )
}
