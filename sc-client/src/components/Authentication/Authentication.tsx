import React, { FC, useEffect, useRef, useState } from 'react'
import './authentication.scss'
import { fetchRequest, passwordValidator } from './authentication.helpers'

interface AuthenticationProps {}

interface AuthenticationFormData {
  username: string
  password: string
}

const Authentication: FC<AuthenticationProps> = () => {
  const [formData, setFormData] = useState<AuthenticationFormData>({ username: '', password: '' })
  
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const [passwordError, setPasswordError] = useState({ error: false, content: '' })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRequest = async (action: string) => {
    fetchRequest(action, formData)
  }

  useEffect(() => {
    if (document.activeElement === passwordInputRef?.current) {
      const timer = setTimeout(() => {
        if (passwordInputRef != null && passwordInputRef.current?.value === formData.password) {
          setPasswordError(passwordValidator(passwordInputRef.current.value))
        }
      }, 500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [formData.password])

  return (
    <section className="authentication">
      <div className="authentication-container">
        <div className="authentication-form_field">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            placeholder="juandiaz12"
            value={formData.username}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className={'authentication-form_field passwordField ' + (passwordError.error ? 'error' : '')}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
            ref={passwordInputRef}
          />
          <span className="passwordErrorMessage">{passwordError.content}</span>
        </div>
        <div className="authentication-buttons">
          <button id="login-button" onClick={() => handleRequest('logIn')}>
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
