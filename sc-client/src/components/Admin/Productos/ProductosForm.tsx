import React, { FC, useState, useEffect } from 'react'
import './productosForm.css'
import { ProductType } from './interfaces'
import { dateFormatforInput } from '../../../utils/functions'
import { fetchProduct, handleDeleteProduct, handleFormSubmit } from './helpers'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageInputs from '../../ui/inputs/ImageInputs'
import { useQuery } from '../../../custom-hooks'
import Loader from '../../ui/Loader'

interface ProductosFormProps {}

const newProductPropsObj: ProductType = {
  name: '',
  description: '',
  createdAt: new Date(),
  image: '',
  categories: [''],
  articles: [],
}

const ProductosForm: FC<ProductosFormProps> = () => {
  const location: string = useLocation().search
  const id = useQuery(location).get('id')

  const [newProduct, setNewProduct] = useState<ProductType>({
    ...newProductPropsObj,
  })
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      fetchProduct(id)
        .then(({ product }) => {
          if (product) {
            setNewProduct({
              ...product,
              createdAt: new Date(product.createdAt),
              image: product.image || '',
            })
            setLoaded(true)
          }
        })
        .catch((err) => console.log(err))
    } else {
      setLoaded(true)
    }
  }, [id])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate()

  const formSubmitAndNavigate = async () => {
    await handleFormSubmit(newProduct)
    navigate(`/admin/productos`, { replace: true })
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
            imagePreviewDivIDPrefix="productosForm"
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
        <button onClick={(e) => formSubmitAndNavigate()}>{id ? 'Guardar cambios' : 'Crear'}</button>
        <button onClick={() => id && handleDeleteProduct(id)}>{'Delete'}</button>
      </div>
      {!loaded && <Loader />}
    </div>
  )
}

export default ProductosForm
