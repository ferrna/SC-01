import { FC } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import ArticulosAdmin from '../../components/Admin/Articulos/ArticulosAdmin'
import './admin.styles.css'
import ArticulosForm from '../../components/Admin/Articulos/ArticulosForm'

interface AdminProps {}

const Admin: FC<AdminProps> = ({}) => {
  const isActiveStyle = (navObj) => {
    return navObj.isActive ? 'tab-button active' : 'tab-button'
  }

  return (
    <div id="page_admin">
      <div className="admin_header">
        <div className="tabs">
          <div className="tab">
            <p>Articulos</p>
            <div className="tab-buttons">
              <NavLink end to="articulos" className={isActiveStyle}>
                <p>Panel</p>
              </NavLink>
              <NavLink to="articulos/crear" className={isActiveStyle}>
                <p>Crear</p>
              </NavLink>
              <NavLink to="articulos/editar/" className={isActiveStyle}>
                <p>Editar</p>
              </NavLink>
            </div>
          </div>
          <div className="tab">
            <p>Productos</p>
            <div className="tab-buttons">
              <NavLink end to="productos" className={isActiveStyle}>
                <p>Panel</p>
              </NavLink>
              <NavLink to="productos/crear" className={isActiveStyle}>
                <p>Crear</p>
              </NavLink>
              <NavLink to="productos/editar/" className={isActiveStyle}>
                <p>Editar</p>
              </NavLink>
            </div>
          </div>
          <div className="tab">
            <p>Datos</p>
            <div className="tab-buttons">
              <NavLink to="datos" className={isActiveStyle}>
                <p>Panel</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="admin_body">
        <Routes>
          <Route path="/" element={<div>Desktop</div>} />
          <Route path="articulos" element={<ArticulosAdmin />} />
          <Route path="articulos/crear" element={<ArticulosForm />} />
          <Route path="productos" element={<div>productos</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
