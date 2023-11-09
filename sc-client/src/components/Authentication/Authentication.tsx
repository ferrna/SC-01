import React, { FC, useState } from 'react'
import './authentication.css'
import { useNavigate } from 'react-router-dom'
import { fetchRequest } from './authentication.helpers'

interface AuthenticationProps {}

interface AuthenticationFormData {
  username: string
  password: string
}

const Authentication: FC<AuthenticationProps> = () => {
  const [formData, setFormData] = useState<AuthenticationFormData>({ username: '', password: '' })
  const navigate = useNavigate()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRequest = async (action: string, navigate?) => {
    fetchRequest(action, formData, navigate)
  }

  return (
    <section className="authentication">
      <div className="container">
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            placeholder="juandiaz12"
            value={formData.username}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="container-buttons">
          <button id="login-button" onClick={() => handleRequest('logIn', navigate)}>
            Ingresar
          </button>
          <button id="signin-button" onClick={() => handleRequest('register')}>
            Crear cuenta
          </button>
        </div>
      </div>
    </section>
  )
}

export default Authentication
