import React, { FC, useState, useEffect } from 'react'
import './articulosForm.css'
import { PiPlusCircleLight } from 'react-icons/pi'
import { fetchArticle, handleDeleteArticle, handleFormSubmit } from './helpers'
import { ArticleForm } from './interfaces'
import { dateFormatforInput } from '../../../utils/functions'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageInputs from '../../ui/inputs/ImageInputs'
import { useQuery } from '../../../custom-hooks'
import Loader from '../../ui/Loader'

interface ArticulosFormProps {}

const newArticlePropsObj: ArticleForm = {
  title: '',
  drophead: '',
  author: '',
  createdAt: new Date(),
  image: '',
  introduction: '',
  body: '',
}

const ArticulosForm: FC<ArticulosFormProps> = () => {
  const location: string = useLocation().search
  const id = useQuery(location).get('id')

  const [newArticle, setNewArticle] = useState<ArticleForm>({
    ...newArticlePropsObj,
  })
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      fetchArticle(id)
        .then(({ article }) => {
          if (article) {
            setNewArticle({
              ...article,
              createdAt: new Date(article.createdAt),
              image: article.image || '',
            })
            setLoaded(true)
          }
        })
        .catch((err) => console.log(err))
    } else {
      setLoaded(true)
    }
  }, [id])

  const [showInputContenido2, setShowInputContenido2] = useState<boolean>(false)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate()

  const formSubmitAndNavigate = async () => {
    await handleFormSubmit(newArticle)
    navigate(`/admin/articulos`, { replace: true })
  }

  return (
    <div id="articleForm">
      <div className="articleForm-container">
        <div className="articleForm-title">
          {id && <span className="fs-12">Editando el artículo {id}</span>}
          <h2>Creación de un artículo</h2>
          {id && <span></span>}
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
          <ImageInputs
            formState={newArticle}
            setFormState={setNewArticle}
            imagePreviewDivIDPrefix="articulosForm"
            secondInput={true}
          />
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
        <button onClick={formSubmitAndNavigate}>{id ? 'Guardar cambios' : 'Crear'}</button>
        <button onClick={() => id && handleDeleteArticle(id)}>{'Delete'}</button>
      </div>
      {!loaded && <Loader />}
    </div>
  )
}

export default ArticulosForm

// TODO:
// - Only one image is being handled per transaction
