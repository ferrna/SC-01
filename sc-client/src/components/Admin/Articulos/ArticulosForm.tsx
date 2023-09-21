import React, { FC } from 'react'
import './articulosForm.css'

interface ArticulosFormProps {}

type ArticulosFormState = {
  title: string
  drophead: string
  author: string
  date: Date
  image1: string
  image2?: string
  introduction: string
  body: string
  body2?: string
}

const ArticulosForm: FC<ArticulosFormProps> = ({}) => {
  const [newArticle, setNewArticle] = React.useState<ArticulosFormState>({
    title: '',
    drophead: '',
    author: '',
    date: new Date(),
    image1: '',
    introduction: '',
    body: '',
  })

  const [showInputContenido2, setShowInputContenido2] = React.useState<boolean>(false)
  const [showInputImagen2, setShowInputImagen2] = React.useState<boolean>(false)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    })
  }
  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.files ? e.target.files[0] : '',
    })
  }

  const titleandsub = [
    { name: 'title', label: 'Título' },
    { name: 'subtitle', label: 'Subtítulo' },
  ]
  const dateandauthor = [
    { name: 'author', label: 'Autor', type: 'text' },
    { name: 'date', label: 'Fecha', type: 'date' },
  ]

  return (
    <div id="articulosForm">
      <div className="articulosForm-container">
        <h2>Creación de un artículo</h2>
        <section className="articulo_componentes">
          {titleandsub.map((item, index) => (
            <div key={index}>
              <label htmlFor={item.name}>{item.label}</label>
              <input type="text" name={item.name} id={item.name} onChange={(e) => onInputChange(e)} />
            </div>
          ))}
          <div className="fecha-y-author">
            {dateandauthor.map((item, index) => (
              <span key={index}>
                <label htmlFor={item.name}>{item.label}</label>
                <input type={item.type} name={item.name} id={item.name} onChange={(e) => onInputChange(e)} />
              </span>
            ))}
          </div>
          <div>
            <label htmlFor="image1">Imagen 1</label>
            <input type="file" name="image1" onChange={(e) => onFileInput(e)} />
          </div>
          <button onClick={() => setShowInputImagen2(true)}>agregar imagen 2</button>
          {showInputImagen2 && (
            <div>
              <label htmlFor="image2">Imagen 2</label>
              <input type="file" name="image2" onChange={(e) => onFileInput(e)} />
            </div>
          )}
        </section>
        <section className="articulo_contenidos">
          <div className="contenido-1">
            <label htmlFor="introduction">Introduccion</label>
            <textarea name="introduction" onChange={(e) => onInputChange(e)} />
          </div>
          <div className="contenido-1">
            <label htmlFor="body">Contenido 1</label>
            <textarea name="body" onChange={(e) => onInputChange(e)} />
          </div>
          <button onClick={() => setShowInputContenido2(true)}>agregar contenido</button>
          {showInputContenido2 && (
            <div className="contenido-1">
              <label htmlFor="body2">Contenido 2</label>
              <textarea name="body2" onChange={(e) => onInputChange(e)} />
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ArticulosForm
