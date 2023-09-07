import { FC } from 'react'
import './resultsSection.css'
import { PiClockCounterClockwiseLight } from 'react-icons/pi'

import mockImage from '../../../../images/barimix-30-capsulas.jpg'
import {productsMock} from '../../../mockData'

interface ResultsSectionProps {
  
}

const ResultsSection: FC<ResultsSectionProps> = ({ }) => {
    const products = productsMock;
  return (
    <div className='_results-section'>
      <div className='_results-section__title'><h3>Busquedas recientes</h3></div>
        <div className='_results-section__suggestion'>
            <PiClockCounterClockwiseLight size={24} style={{margin:0, paddingTop: "2px"}} /><p>mag</p>
        </div>  
        <div className='_results-section__suggestion'>
            <PiClockCounterClockwiseLight size={24} style={{margin:0, paddingTop: "2px"}} /><p>mae</p>
        </div>
        <div style={{display: "flex", width: "100%", margin: "0.3rem 0.2rem 0.8rem"}}>
          <button className='_suggestions_borrar'><i>Borrar</i></button>
          ·&nbsp;
          <button className='_suggestions_borrar'><i>Desactivar</i></button>  
        </div>
        <div className='_results-section__title'><h3>Productos populares</h3></div>
          <div className='_results-section_products'>
              {products && products.map((product, index) => (
                  <div className='_results-section_product-container'>
                      <img src={mockImage} alt={product.name} style={{ width: "100%" }} />
                      <h3 className='_results-section_product-name'><a href='#'>{product.name}</a></h3>
                      <span className='_results-section_product-price'><span>{"$ "}</span>{product.price}</span>
                  </div>))
              }
        </div>
    </div>
  )
}

export default ResultsSection;