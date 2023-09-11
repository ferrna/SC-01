import React, { FC } from 'react'
import { Product } from '../../../common/types'
import './itemProducto.css'
import mockImage from '../../../images/barimix-30-capsulas.jpg'

interface ItemProductoProps {
    product: Product;
}

const ItemProducto: FC<ItemProductoProps> = ({ product }) => {

  return (
    <div className='comp__pro_ite'>
      <div className='comp__pro_ite-container'>
        <img src={mockImage} alt={product.name}/>
        <h3><a href='#'>{product.name}</a></h3>
        <span className='price'><span>{"$ "}</span>{product.price}</span>
        <div className='comp__pro_ite-container-button'><button>Ver mas</button></div>
      </div>
    </div>
  )
}

export default ItemProducto;