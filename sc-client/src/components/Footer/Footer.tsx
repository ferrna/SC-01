import { FC } from 'react'
import Logo from '../../images/Logo.png'
import './Footer.styles.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer id="comp_foo_footer">
      <section id="comp_foo_section">
        <div>
          <img src={Logo} alt="Logo" id="comp_foo_logo" />
        </div>
        <div>
          <p>2023 by . All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  )
}
