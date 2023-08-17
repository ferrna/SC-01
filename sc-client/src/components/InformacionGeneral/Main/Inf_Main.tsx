import { FC } from 'react'
import Logo from '../../../images/Logo.png'
import './Inf_Main.styles.css'
import { FaRegClock } from 'react-icons/fa'

interface Inf_MainProps {}

export const Inf_Main: FC<Inf_MainProps> = ({}) => {
  return (
    <div id="comp_inf_main">
      <div id="comp_inf_main-txt">
        <h4>
          <img src={Logo} alt="Logo" id="comp_foo_logo" />
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maiores fuga soluta tenetur saepe
          consectetur nemo voluptatem deleniti similique incidunt laborum amet, dolor velit, ipsam
          exercitationem dolorem. Vel, iste impedit.
        </p>
      </div>
      <div id="comp_inf_main-contacto">
        Garcia SC S.L.
        <br />
        Avenida General Paz 4698 - L.Torrent
        <br />
        3000 Santa Fe (Argentina)<p> </p>
        <br />
        <a href="tel:+">
          <i></i> +25 912 245 479
        </a>
        <br />
        <a href="mailto:info@.com">
          <i></i> info@.com
        </a>
        <br />
      </div>
      <div id="comp_inf_main-horario">
        <div className="reloj">
          <FaRegClock style={{ color: '#fff' }} /> HORARIO<p> </p>
        </div>
        De lunes a viernes de 9:30 a 14:00 y de 17:00 a 19:45
      </div>
    </div>
  )
}
