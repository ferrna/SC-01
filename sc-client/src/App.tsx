import './app.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Admin from './pages/Admin/Admin'

function App() {
  return (
    <div className="Body">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
