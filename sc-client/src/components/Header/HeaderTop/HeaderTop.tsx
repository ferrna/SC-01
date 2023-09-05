import { FC } from 'react'
import './headerTop.css'

import { SlMenu } from 'react-icons/sl'
import { FaWhatsapp } from 'react-icons/fa'
import { TbNotebook } from 'react-icons/tb'

import LogoOnly from '../../../images/LogoOnly.png'

interface HeaderTopProps {
  handleToggleClick: () => void,
}

const HeaderTop: FC<HeaderTopProps> = ({handleToggleClick}) => {

  return (
    <div className='headerTop'>
          {/* Toggle handler to show dropdown Menu */}
          <button className='headerTop__menu' onClick={handleToggleClick}>
              <SlMenu style={{ color: '#343434', padding: "10px 0 0 0" }} size={40} />
              <span>Menú</span>
          </button>
          {/* Central logo */}
          <div className='headerTop__logo'>
              <img src={LogoOnly} alt="" />
          </div>
          {/* Icons */}
          <div className='headerTop__icons'>
              <div className='headerTop__icon'>
                <FaWhatsapp style={{ color: '#343434', padding: "8px 0 2px 0" }} size={40} />
                <span>WhatsApp</span>
              </div>
              <div className='headerTop__icon'>
                <TbNotebook style={{ color: '#343434', padding: "8px 0 2px 0" }} size={40} />
                <span>Blog</span>
              </div>
          </div>
      </div>
  )
}

export default HeaderTop;