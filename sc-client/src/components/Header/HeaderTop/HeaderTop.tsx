import React, { FC, useState } from 'react'
import './headerTop.css'
import { SlMenu, SlNote } from 'react-icons/sl'
import { FaWhatsapp } from 'react-icons/fa'
import { TbNotebook } from 'react-icons/tb'
import LogoOnly from '../../../images/LogoOnly.png'

interface HeaderTopProps {
  
}

const HeaderTop: FC<HeaderTopProps> = ({ }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggleClick = () => {
    setIsToggled((prevState) => !prevState)
  }
    
  return (
      <div className='header-top'>
          <div className='header-top__menu' onClick={handleToggleClick}>
              <SlMenu style={{ color: '#343434', padding: "10px 0 0 0" }} size={40} />
              <span>Menú</span>
          </div>
          <div className='header-top__logo'>
              <img src={LogoOnly} alt="" />
          </div>
          <div className='header-top__icons'>
              <div className='header-top__icon'>
                <FaWhatsapp style={{ color: '#343434', padding: "8px 0 2px 0" }} size={40} />
                <span>WhatsApp</span>
              </div>
              <div className='header-top__icon'>
                <TbNotebook style={{ color: '#343434', padding: "8px 0 2px 0" }} size={40} />
                <span>Blog</span>
              </div>
          </div>
          <div className={`header-dropDown ${isToggled ? 'toggled' : ''}`}>
              <div className="header-dropDown__menu">Span item menu</div>
          </div>
      </div>
  )
}

export default HeaderTop;