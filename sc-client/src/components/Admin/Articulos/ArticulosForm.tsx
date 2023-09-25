import React, { FC, useRef, useState } from 'react'
import './articulosForm.css'
import { PiFileImageFill, PiPlusCircleLight } from 'react-icons/pi'

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

const newArticlePropsObj: ArticulosFormState = {
  title: '',
  drophead: '',
  author: '',
  date: new Date(),
  image1: '',
  introduction: '',
  body: '',
}

const ArticulosForm: FC<ArticulosFormProps> = ({}) => {
  const [newArticle, setNewArticle] = React.useState<ArticulosFormState>({
    ...newArticlePropsObj,
  })

  const inputImage1 = useRef(null)
  const inputImage2 = useRef(null)

  const [showInputContenido2, setShowInputContenido2] = useState<boolean>(false)

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

  return (
    <div id="articleForm">
      <div className="articleForm-container">
        <h2>Creación de un artículo</h2>
        <section className="articleForm_leftSection fs-14">
          <div>
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" value={newArticle.title} onChange={(e) => onInputChange(e)} />
          </div>
          <div>
            <label htmlFor={'drophead'}>Subtitulo</label>
            <input type="text" name={'drophead'} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="fecha_Autor">
            <span>
              <label htmlFor="author">Autor</label>
              <input type="text" name="author" onChange={(e) => onInputChange(e)} />
            </span>
            <span>
              <label htmlFor={'date'}>Fecha</label>
              <input type="date" name={'date'} onChange={(e) => onInputChange(e)} />
            </span>
          </div>
          <div className="imageInputs">
            <div>
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
            <div>
              <input
                style={{ display: 'none' }}
                type="file"
                name="image2"
                ref={inputImage2}
                onChange={(e) => onFileInput(e)}
              />
              <button
                // @ts-ignore
                onClick={() => inputImage2.current.click()}
                disabled={newArticle.image1.length > 0 ? false : true}
                className={newArticle.image1.length > 0 ? '' : 'imageInputs-input2 disabled'}
              >
                <div>
                  <PiFileImageFill size={30} />
                  <span className="fs-12">Subir imagen</span>
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="articleForm_rightSection">
          <div className="content">
            <label htmlFor="introduction">Introduccion</label>
            <textarea name="introduction" onChange={(e) => onInputChange(e)} />
          </div>
          <div className="content">
            <label htmlFor="body">Contenido 1</label>
            <textarea name="body" onChange={(e) => onInputChange(e)} />
          </div>
          <button onClick={() => setShowInputContenido2(true)} className="buttonMoreContent">
            <span className="fs-12">Agregar contenido 2</span>
            <PiPlusCircleLight size={25} />
          </button>
          {showInputContenido2 && (
            <div className="content">
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
