import React, { FC } from 'react'
import './loader.css'

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className="loader">
      <span className="spinner"></span>
    </div>
  )
}

export default Loader
