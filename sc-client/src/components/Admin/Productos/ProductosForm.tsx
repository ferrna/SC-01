import React, { FC, useState, useEffect } from 'react'
import './productosForm.css'
import { ProductType } from './interfaces'
import { dateFormatforInput, useQuery } from '../../../utils/functions'
import ImageInputs from './ImageInputs'
import { fetchProduct, handleDeleteProduct, handleFormSubmit } from './helpers'
import { useLocation } from 'react-router-dom'

interface ProductosFormProps {}

const newProductPropsObj: ProductType = {
  name: '',
  description: '',
  createdAt: new Date(),
  image: '',
  categories: [''],
  articles: [],
}

const ProductosForm: FC<ProductosFormProps> = ({}) => {
  const location: string = useLocation().search
  const id = useQuery(location).get('id')

  const [newProduct, setNewProduct] = useState<ProductType>({
    ...newProductPropsObj,
  })

  useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then(({ product }) => {
          console.dir(product)
          if (product) {
            setNewProduct({
              ...product,
              createdAt: new Date(product.createdAt),
              image: product.image || '',
            })
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div id="productForm">
      <div className="productForm-container">
        <div className="productForm-title">
          {id && <span className="fs-12">Editando el producto {id}</span>}
          <h2>Creación de un producto</h2>
          {id && <span></span>}
        </div>
        <section className="productForm_leftSection fs-14">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" value={newProduct.name} onChange={(e) => onInputChange(e)} />
          </div>
          <div>
            <span>
              <label htmlFor={'date'}>Fecha de actualizacion/creacion</label>
              <br />
              <input
                type="date"
                name={'date'}
                value={dateFormatforInput(newProduct.createdAt)}
                onChange={(e) => onInputChange(e)}
              />
            </span>
          </div>
          <ImageInputs
            formState={newProduct}
            setFormState={setNewProduct}
            idImgPreview_0="productosFormImgPreview"
          />
        </section>
        <section className="productForm_rightSection">
          <div className="content">
            <label htmlFor="description">Descripcion</label>
            <textarea name="description" value={newProduct.description} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="content">
            <label htmlFor="categories">Categorias</label>
            <textarea name="categories" value={newProduct.categories} onChange={(e) => onInputChange(e)} />
          </div>
        </section>
        <button onClick={(e) => handleFormSubmit(newProduct)}>{id ? 'Guardar cambios' : 'Crear'}</button>
        <button onClick={() => id && handleDeleteProduct(id)}>{'Delete'}</button>
      </div>
    </div>
  )
}

export default ProductosForm
