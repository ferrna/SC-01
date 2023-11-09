import { FC, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './admin.styles.css'

import ArticulosAdmin from '../../components/Admin/Articulos/ArticulosAdmin'
import ArticulosForm from '../../components/Admin/Articulos/ArticulosForm'
import ProductosAdmin from '../../components/Admin/Productos/ProductosAdmin'
import ProductosForm from '../../components/Admin/Productos/ProductosForm'
import AdminHeader from './AdminHeader/AdminHeader'

import axios from 'axios'
import Authentication from '../../components/Authentication/Authentication'

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
  const [loadContent, setLoadContent] = useState<boolean>(false)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      axios({
        method: 'get',
        withCredentials: true,
        url: `/auth/admin-route`,
      })
        .then(() => {
          if (mounted) setLoadContent(true)
        })
        .catch(() => {
          if (mounted) setLoadContent(false)
        })
    }
    return () => {
      mounted = false
      return
    }
  }, [])

  return (
    <div id="page_admin">
      {loadContent ? (
        <>
          <AdminHeader />
          <div className="admin_body">
            <Routes>
              <Route path="/" element={<div>Desktop</div>} />
              <Route path="articulos" element={<ArticulosAdmin />} />
              <Route path="articulos/crear" element={<ArticulosForm />} />
              <Route path="productos" element={<ProductosAdmin />} />
              <Route path="productos/crear" element={<ProductosForm />} />
            </Routes>
          </div>
        </>
      ) : (
        <Authentication />
      )}
    </div>
  )
}

export default Admin

//TODO:
// - [x] Add a "loading" state to ArticulosAdmin.tsx
// - [ ] Creation and editing's routes should be the same
