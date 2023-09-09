import React, { FC } from 'react'
import './itemResult.css'
import { Product } from '../../../../../common/types'

import mockImage from '../../../../../images/barimix-30-capsulas.jpg'

interface ItemResultProps {
  product: Product
}

const ItemResult: FC<ItemResultProps> = ({ product }) => {
  return (
    <div className="_results-section_result">
      <div className="_results-section_result__img">
        <img src={mockImage} alt="" />
      </div>
      <div className="_results-section_result__info">
              <div className="_results-section_result__info__title">{product.name}</div>
        <div className="_results-section_result__info__price">{product.price}</div>
      </div>
      <div className="_results-section_result__actions">
        <button>Ver</button>
      </div>
    </div>
  )
}

export default ItemResult;