import React, { FC } from 'react'
import './errorMessage.css'
import { TbError404 } from 'react-icons/tb'
import { TbHome2 } from 'react-icons/tb'
import ReactRouterDomLink from '../ui/ReactRouterDomLink'

interface ErrorMessageProps {
  children: React.ReactNode
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className="errorMessage" style={{ minHeight: '75vh' }}>
      <TbError404 size={100} />
      <p className="text-center">{children}</p>
      <ReactRouterDomLink
        to="/"
        style={{
          margin: '40px 0 20px',
          fontSize: '1.2rem',
          color: '#333',
          backgroundColor: '#c2b4e2',
          padding: '10px 20px',
          borderRadius: '5px',
        }}
      >
        <TbHome2 />
        <br />
        Volver a Inicio
      </ReactRouterDomLink>
    </div>
  )
}

export default ErrorMessage
