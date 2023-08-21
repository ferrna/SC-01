import { FC } from 'react'
import { DropDownInfo } from '../../ui/dropDown/DropDownInfo'
import './preguntas.styles.css'

interface PreguntasProps {}

export const Preguntas: FC<PreguntasProps> = ({}) => {
  return (
    <div id="comp_inf_div">
      <DropDownInfo />
      <DropDownInfo />
    </div>
  )
}
