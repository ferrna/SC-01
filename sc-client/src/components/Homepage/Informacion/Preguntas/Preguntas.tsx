import { FC } from 'react'
import { DropDownInfo } from '../../../ui/dropDown/DropDownInfo'
import './preguntas.styles.css'

interface PreguntasProps {}

export const Preguntas: FC<PreguntasProps> = ({}) => {
  return (
    <div id="comp_inf">
      <div id="comp_inf_preguntas-mobile">
        <DropDownInfo />
        <DropDownInfo />
      </div>
      <div id="comp_inf_preguntas-lg">
        <div className="newsletter">
          <div className="newsletter-container">
            <h2>NEWSLETTER</h2>
            <p>Recibe nuestras últimas noticias</p>
            <div className="newsletter-input">
              <input type="text" placeholder="Email" />
              <button>SUBSCRIBIRSE</button>
            </div>
            <p className="newsletter-claimer">Puede darse de baja en cualquier momento. Para ello,<br/>
              consulte nuestra información de contacto en el aviso legal.</p>
          </div>
        </div>
        <div className='_lg-informacion'>
          <div>
            <h3>INFORMACIÓN</h3>
            <p title=''><a>leroaosd</a></p>
            <p title=''><a>leroaosd</a></p>
          </div>
          <div>
            <h3>LOREM</h3>
            <p title=''><a>leroaosd</a></p>
            <p title=''><a>leroaosd</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
