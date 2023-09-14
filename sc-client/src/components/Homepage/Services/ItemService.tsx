import React, { FC } from 'react'
import './itemService.css'

interface ItemServiceProps {
    titulo: string;
    img: string;
}

const ItemService: FC<ItemServiceProps> = ({ titulo, img }) => {
  return (
    <div className='itemService'>
        <div className="itemService_image">
            <img src={img} alt={titulo} />
        </div>
        <div className="itemService_title">
            <h3>{titulo}</h3>
        </div>  
    </div>
  )
}

export default ItemService;