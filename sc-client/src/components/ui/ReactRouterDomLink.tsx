import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface ReactRouterDomLinkProps {
  to: string
  end?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string | ((e: any) => string)
}

const ReactRouterDomLink: FC<ReactRouterDomLinkProps> = ({ to, children, className, style, end = false }) => {
  return (
    <NavLink
      end={end}
      to={to}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        ...style,
      }}
      className={className}
    >
      {children}
    </NavLink>
  )
}

export default ReactRouterDomLink
