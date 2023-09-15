import React, { FC } from 'react'
import './services.css'
import ItemService from './ItemService';
import img1 from './images/a-jpg-image-120x120-of-a-fitotherapy-bottle-upscaled.png'
import img2 from './images/a-jpg-image-120x120-of-a-homeopathy-bottle-upscaled(1).png'

interface ServicesProps {

}

const services = [
	{
		title: "Fitoterapia",
		img: img1,
		color: "#f8bf8a"
	},
	{
		title: "Loremipsum",
		img: img2,
		color: "#f8bf8a"
	},
	{
		title: "Loremipsum",
		img: img2,
		color: "#f8bf8a"
	},
	{
		title: "Fitoterapia",
		img: img1,
		color: "#f8bf8a"
	},
	{
		title: "Fitoterapia",
		img: img1,
		color: "#f8bf8a"
	},
	{
		title: "Loremipsum",
		img: img2,
		color: "#f8bf8a"
	},
]

const Services: FC<ServicesProps> = ({  }) => {
  return (
	<div id="comp_ser_article">
		<div id="comp_ser_article-title">
			<h2>Servicios</h2>
		</div>
    	<div id="comp_ser_article-container">
			{services && services.map((service, index) =>
				<ItemService key={index} titulo={service.title} img={service.img} bgcolor={service.color} />)
			}
    	</div>
    </div>
  )
}

export default Services;