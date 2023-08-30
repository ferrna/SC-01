import { FC, useState } from 'react'
import './header.styles.css'
import HeaderTop from './HeaderTop/HeaderTop';
import { FiSearch } from 'react-icons/fi'
import { FaRegClock } from 'react-icons/fa'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({ }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggleClick = () => {
    setIsToggled((prevState) => !prevState)
  }
    
  return (
    <header id="comp_hea_header">
      <div id="_bg_barra_neon">
        <div id="_bg_neon_container">
          <div>
            <div className="fa-regclock">
              <FaRegClock style={{ color: '#fff' }} />
            </div>
            HORARIO: 24/7 8 hs todo el dia
          </div>
          <div>
            <div className="fa-regclock">
              <FaRegClock style={{ color: '#fff' }} />
            </div>
            HORARIO: 24/7 8 hs todo el dia
          </div>
        </div>
      </div>
      <HeaderTop handleToggleClick={handleToggleClick} />
      <div id="_mobile_header_logotxt"><span>Tu farmacia online de confianza</span></div>
      <div id="_mobile_header_buscar">
        <button id="_mobile_header_icon">
          <FiSearch className='fi-search' />
        </button>
        <input disabled placeholder='Buscar' id="_mobile_header_input" />
      </div>
      <div className={`header-dropDown ${isToggled ? 'toggled' : ''}`}>
         <div className="header-dropDown__menu">Span item menu</div>
      </div>
    </header>
  )
}

export default Header;