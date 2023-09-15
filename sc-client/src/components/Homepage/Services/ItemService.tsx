import React, { FC } from 'react'
import './itemService.css'

interface ItemServiceProps {
    titulo: string;
    img: string;
    bgcolor: string;
}

const ItemService: FC<ItemServiceProps> = ({ titulo, img, bgcolor }) => {
  return (
    <div className='itemService'>
        <div className="itemService_image">
            <img src={img} alt={titulo} />
        </div>
        <div className="itemService_title" style={{backgroundColor: bgcolor}}>
            <h3>{titulo}</h3>
        </div>  
    </div>
  )
}

export default ItemService;