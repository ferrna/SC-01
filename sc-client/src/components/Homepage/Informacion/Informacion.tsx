import { FC } from 'react'
import './informacion.styles.css'
import { Datos } from './Datos/Datos'
import { Preguntas } from './Preguntas/Preguntas'

interface InformacionProps {}

const Informacion: FC<InformacionProps> = ({}) => {
  return (
    <section id="comp_inf_section">
      <div id="comp_inf_section-container">
        <Datos />
        <Preguntas />
      </div>
    </section>
  )
}

export default Informacion;