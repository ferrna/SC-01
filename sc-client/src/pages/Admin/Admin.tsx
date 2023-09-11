import { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import ArticulosAdmin from '../../components/Admin/Articulos/ArticulosAdmin';
import './admin.styles.css'

interface AdminProps {
  
}

const Admin: FC<AdminProps> = ({  }) => {
  return (
    <div id="page_admin">
      <Routes>
        <Route path="/" element={<div>Desktop</div>} />
        <Route path="articulos" element={<ArticulosAdmin />} />
        <Route path="productos" element={<div>productos</div>} />
      </Routes>
    </div>
  )
}

export default Admin;