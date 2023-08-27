import React, { FC, useEffect, useState } from 'react';
import './productos.styles.css';
// import axios from 'axios';
import { Product } from '../../common/types';
import ItemProducto from './ItemProducto/ItemProducto';
// hardcode data
import { productsMock } from '../mockData'

const Productos: FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      /* const fetchPost = async () => {
        const res = await axios.get('/products');
        setProducts(res.data);
      };
      fetchPost(); */
      setProducts(productsMock);
    } catch (error) {
      console.log(error);
    }
  }, []);
    
  return (
    <section id="comp_pro_section">
      <h2>NUESTROS PRODUCTOS</h2>
      <h3>PRODUCTOS POPULARES</h3>
      <div id="comp_pro_section-container">
        {products && products.map((product) => <ItemProducto product={product}/>)}
      </div>
    </section>
  )
}

export default Productos;