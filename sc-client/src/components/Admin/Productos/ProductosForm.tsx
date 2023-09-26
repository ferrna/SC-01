import React, { FC, useRef, useState, useEffect } from 'react'
import './productosForm.css'
import { PiFileImageFill, PiPlusCircleLight } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import { productsMock } from './mockProducts'

interface ProductosFormProps {}

type ProductType = {
  id?: string
  name: string
  description: string
  date: Date
  image1: string
  image2?: string
  categories?: string[]
  articles: number[]
}

const newProductPropsObj: ProductType = {
  name: '',
  description: '',
  date: new Date(),
  image1: '',
  categories: [''],
  articles: [],
}

const ProductosForm: FC<ProductosFormProps> = ({}) => {
  const query = useQuery()
  const id = query.get('id')
  const [productFormData, setProductFormData] = useState<ProductType>({
    ...newProductPropsObj,
  })
  const inputImage1 = useRef(null)

  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  useEffect(() => {
    console.log(id)
    if (id) {
      const product = productsMock.products.find((product) => product.id === id)
      if (product) {
        setProductFormData({
          ...product,
        })
      }
    }
  }, [])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    })
  }

  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.files ? e.target.files[0] : '',
    })
  }

  const dateFormatforInput = (date: Date) => {
    return (
      date.getFullYear().toString().padStart(4, '0') +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
    )
  }

  return (
    <div id="productForm">
      <div className="productForm-container">
        <div className="productForm-title">
          {id && <span className="fs-12">Editando el producto {id}</span>}
          <h2>Creación de un producto</h2>
          {id && (
            <span></span>
            /* <span style={{ textAlign: 'right', paddingRight: '1rem' }}>
              <button name="Eliminar">
                <RiDeleteBin6Line size={20} color="#434343" />
              </button>
            </span> */
          )}
        </div>
        <section className="productForm_leftSection fs-14">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" value={productFormData.name} onChange={(e) => onInputChange(e)} />
          </div>
          <div>
            <span>
              <label htmlFor={'date'}>Fecha de actualizacion/creacion</label>
              <br />
              <input
                type="date"
                name={'date'}
                value={dateFormatforInput(productFormData.date)}
                onChange={(e) => onInputChange(e)}
              />
            </span>
          </div>
          <div className="imageInput-container">
            <div className="imageInput-inputDiv">
              <input
                style={{ display: 'none' }}
                type="file"
                name="image1"
                ref={inputImage1}
                onChange={(e) => onFileInput(e)}
              />
              {/* @ts-ignore */}
              <button onClick={() => inputImage1.current.click()}>
                <div>
                  <PiFileImageFill size={30} />
                  <span className="fs-12">Subir imagen</span>
                </div>
              </button>
            </div>
            <div id="imageInput-imageDiv">
              <div></div>
            </div>
          </div>
        </section>
        <section className="productForm_rightSection">
          <div className="content">
            <label htmlFor="description">Descripcion</label>
            <textarea
              name="description"
              value={productFormData.description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="content">
            <label htmlFor="categories">Categorias</label>
            <textarea name="categories" value={productFormData.categories} onChange={(e) => onInputChange(e)} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductosForm
