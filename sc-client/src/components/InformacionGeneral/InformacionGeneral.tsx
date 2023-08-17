import { FC } from 'react'
import './InformacionGeneral.styles.css'
import { DropDownInfo } from '../ui/dropDown/dropDownInfo'
import { Inf_Main } from './Main/Inf_Main'

interface InformacionGeneralProps {}

export const InformacionGeneral: FC<InformacionGeneralProps> = ({}) => {
  return (
    <section id="comp_inf_section">
      <div id="comp_inf_section-container">
        <Inf_Main />
      </div>
    </section>
  )
}
