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

  let stringInfoClock = 'HORARIO: Lunes a Viernes de 8 a 12.30 y de 16 a 20 hs. Sabados de 9 a 13 hs.'
    
  return (
    <header id="comp_hea_header">
      {/* Top Open time info display for big screen */}
      <div id="_bg_barra_neon">
        <div id="_bg_neon_container">
          <div>
            <div className="fa-regclock">
              <FaRegClock style={{ color: '#fff' }} />
            </div>
            {stringInfoClock}
          </div>
          <div>
            <div className="fa-regclock">
              <FaRegClock style={{ color: '#fff' }} />
            </div>
            {stringInfoClock}
          </div>
        </div>
      </div>
      {/* Top Open time info display for big screen */}
      {/* Header headerTop, banner and searchbar. */}
      <HeaderTop handleToggleClick={handleToggleClick} />
      <div id="_mobile_header_banner"><span>Tu lorem ipsum sit anmet colore</span></div>
      <div id="_mobile_header_searchbar">
        <button id="_searchbar_icon">
          <FiSearch className='fi-search' />
        </button>
        <input disabled placeholder='Buscar' id="_searchbar_input" />
      </div>
      {/* Header top, ban and searchbar. */}
      {/* Dropdown menu */}
      <div className={`header-dropDown ${isToggled ? 'toggled' : ''}`}>
         {/* Menu items section */}
         <div className="header-dropDown__menu">Span item menu</div>
      </div>
      {/* Dropdown menu */}
    </header>
  )
}

export default Header;