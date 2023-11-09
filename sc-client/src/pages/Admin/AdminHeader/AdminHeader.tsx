import { FC } from 'react'
import './adminHeader.css'
import ReactRouterDomLink from '../../../components/ui/ReactRouterDomLink'

interface AdminHeaderProps {}

const AdminHeader: FC<AdminHeaderProps> = () => {
  const isActiveStyle = (navLinkEle) => {
    return navLinkEle.isActive ? 'tab-button active' : 'tab-button'
  }
  return (
    <div className="admin_header">
      <div className="tabs">
        <div className="tab">
          <p>Articulos</p>
          <div className="tab-buttons">
            <ReactRouterDomLink end={true} to="articulos" className={isActiveStyle} children={<p>Panel</p>} />
            <ReactRouterDomLink to="articulos/crear" className={isActiveStyle} children={<p>Crear</p>} />
            <ReactRouterDomLink to="articulos/editar/" className={isActiveStyle} children={<p>Editar</p>} />
          </div>
        </div>
        <div className="tab">
          <p>Productos</p>
          <div className="tab-buttons">
            <ReactRouterDomLink end={true} to="productos" className={isActiveStyle} children={<p>Panel</p>} />
            <ReactRouterDomLink to="productos/crear" className={isActiveStyle} children={<p>Crear</p>} />
            <ReactRouterDomLink to="productos/editar/" className={isActiveStyle} children={<p>Editar</p>} />
          </div>
        </div>
        <div className="tab">
          <p>Datos</p>
          <div className="tab-buttons">
            <ReactRouterDomLink to="datos" className={isActiveStyle} children={<p>Panel</p>} />
            {/* <ReactRouterDomLink to="datos/editar" className={isActiveStyle} children={<p>Editar</p>} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
