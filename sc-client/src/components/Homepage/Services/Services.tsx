import React, { FC } from 'react'
import './services.css'
import ItemService from './ItemService';
import img1 from './images/a-jpg-image-120x120-of-a-fitotherapy-bottle-upscaled.png'

interface ServicesProps {
  
}

const Services: FC<ServicesProps> = ({  }) => {
  return (
    <div id="comp_ser_article">
    	<div id="comp_ser_article-container">
				<ItemService titulo="Fitoterapia" img={img1}/>
				<ItemService titulo="Fitoterapia" img={img1}/>
				<ItemService titulo="Fitoterapia" img={img1}/>
				<ItemService titulo="Fitoterapia" img={img1}/>
				<ItemService titulo="Fitoterapia" img={img1}/>
				<ItemService titulo="Fitoterapia" img={img1}/>
    	</div>
    </div>
  )
}

export default Services;