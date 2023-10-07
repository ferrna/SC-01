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
  createdAt: Date
  image: string
  image2?: string
  introduction?: string
  body: string
  body2?: string
}

const newArticlePropsObj: ArticleForm = {
  title: '',
  drophead: '',
  author: '',
  createdAt: new Date(),
  image: '',
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

  const fetchArticle = async (id: string) => {
    const response = await fetch(`http://localhost:3001/articles/${id}`)
    const data = await response.json()
    console.dir(data)
    return data
  }

  useEffect(() => {
    console.log(id)
    if (id) {
      //const article = articlesMock.articles.find((article) => article.id === id)
      fetchArticle(id)
        .then(({ article }) => {
          console.dir(article)
          if (article) {
            setNewArticle({
              ...article,
              createdAt: new Date(article.createdAt),
              image: article.image || '',
            })
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])

  const inputImage = useRef(null)
  const inputImage2 = useRef(null)
  const formElement = useRef(null)

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

  const dateFormatforInput = (createdAt: Date) => {
    return (
      createdAt.getFullYear().toString().padStart(4, '0') +
      '-' +
      (createdAt.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      createdAt.getDate().toString().padStart(2, '0')
    )
  }

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3001/articles/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
  }

  const handleFormSubmit = async () => {
    console.dir(newArticle)
    const data = { ...newArticle }
    const formData = new FormData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    /* 
    const formData = formElement.current || new HTMLFormElement()
    for (let key in data) {
      formData.append(key, data[key])
    }
    const data = new URLSearchParams()
    data.append('image', newArticle.image)
    for (const pair of formData) {
      if (pair[0] !== 'image') {
        data.append(pair[0], pair[1])
      }
    } */
    fetch(`http://localhost:3001/articles/${data.id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: formData,
      /* headers: {
        'content-type': 'multipart/form-data',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, */
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  return (
    <div id="articleForm">
      <form action="" ref={formElement}></form>
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
              <label htmlFor={'createdAt'}>Fecha</label>
              <input
                type="date"
                name={'createdAt'}
                value={dateFormatforInput(newArticle.createdAt)}
                onChange={(e) => onInputChange(e)}
              />
            </span>
          </div>
          <div className="imageInputs">
            <div>
              <input
                style={{ display: 'none' }}
                type="file"
                name="image"
                ref={inputImage}
                onChange={(e) => onFileInput(e)}
              />
              {/* @ts-ignore */}
              <button onClick={() => inputImage.current.click()}>
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
                disabled={newArticle.image?.length > 0 ? false : true}
                className={newArticle.image?.length > 0 ? '' : 'imageInputs-input2 disabled'}
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
        <button onClick={handleFormSubmit}>{id ? 'Guardar cambios' : 'Crear'}</button>
        <button onClick={handleDelete}>{'Delete'}</button>
      </div>
    </div>
  )
}

export default ArticulosForm
