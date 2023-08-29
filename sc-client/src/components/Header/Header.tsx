import { FC } from 'react'
import './header.styles.css'
import HeaderTop from './HeaderTop/HeaderTop';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header id="comp_hea_header">
      <HeaderTop />
    </header>
  )
}

export default Header;