import React, { FC, useRef, useState, useEffect } from 'react'
import './articulosForm.css'
import { PiFileImageFill, PiPlusCircleLight } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import { articlesMock } from './mockArticles'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface ArticulosFormProps {}

type ArticleForm = {
  id?: string
  title: string
  drophead: string
  author: string
  date: Date
  image1: string
  image2?: string
  introduction?: string
  body: string
  body2?: string
}

const newArticlePropsObj: ArticleForm = {
  title: '',
  drophead: '',
  author: '',
  date: new Date(),
  image1: '',
  introduction: '',
  body: '',
}

const ArticulosForm: FC<ArticulosFormProps> = ({}) => {
  const query = useQuery()
  const id = query.get('id')
  const [newArticle, setNewArticle] = useState<ArticleForm>({
    ...newArticlePropsObj,
  })

  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  useEffect(() => {
    console.log(id)
    if (id) {
      const article = articlesMock.articles.find((article) => article.id === id)
      if (article) {
        setNewArticle({
          ...article,
        })
      }
    }
  }, [])

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
    <div id="articleForm">
      <div className="articleForm-container">
        <div className="articleForm-title">
          {id && <span className="fs-12">Editando el artículo {id}</span>}
          <h2>Creación de un artículo</h2>
          {id && (
            <span></span>
            /* <span style={{ textAlign: 'right', paddingRight: '1rem' }}>
              <button title="Eliminar">
                <RiDeleteBin6Line size={20} color="#434343" />
              </button>
            </span> */
          )}
        </div>
        <section className="articleForm_leftSection fs-14">
          <div>
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" value={newArticle.title} onChange={(e) => onInputChange(e)} />
          </div>
          <div>
            <label htmlFor={'drophead'}>Subtitulo</label>
            <input
              type="text"
              name={'drophead'}
              value={newArticle.drophead}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="fecha_Autor">
            <span>
              <label htmlFor="author">Autor</label>
              <input type="text" name="author" value={newArticle.author} onChange={(e) => onInputChange(e)} />
            </span>
            <span>
              <label htmlFor={'date'}>Fecha</label>
              <input
                type="date"
                name={'date'}
                value={dateFormatforInput(newArticle.date)}
                onChange={(e) => onInputChange(e)}
              />
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
            <textarea name="introduction" value={newArticle.introduction} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="content">
            <label htmlFor="body">Contenido 1</label>
            <textarea name="body" value={newArticle.body} onChange={(e) => onInputChange(e)} />
          </div>
          <button onClick={() => setShowInputContenido2(true)} className="buttonMoreContent">
            <span className="fs-12">Agregar contenido 2</span>
            <PiPlusCircleLight size={25} />
          </button>
          {showInputContenido2 && (
            <div className="content">
              <label htmlFor="body2">Contenido 2</label>
              <textarea name="body2" value={newArticle.body2} onChange={(e) => onInputChange(e)} />
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ArticulosForm
