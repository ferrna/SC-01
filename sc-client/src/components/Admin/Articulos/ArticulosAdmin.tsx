import React, { FC, useState, useEffect } from 'react'
import './articulosAdmin.css'
import { VscEdit } from 'react-icons/vsc'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { fetchAllArticles } from './helpers'
import { ArticleForm } from './interfaces'

interface ArticulosAdminProps {}

const ArticulosAdmin: FC<ArticulosAdminProps> = () => {
  const [articlesFetched, setArticlesFetched] = useState<ArticleForm[]>([])

  useEffect(() => {
    if (true) {
      fetchAllArticles()
        .then((articles) => {
          console.dir(articles)
          if (articles) {
            setArticlesFetched([...articles])
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <div id="articlesAdmin">
      <div className="articlesAdmin-container">
        <div className="articlesAdmin-table">
          <div className="articlesAdmin-table_item">
            <div className="mw-240">Titulo</div>
            <div className="mw-220">Subtitulo</div>
            <div className="">Fecha</div>
            <div className="">Autor</div>
            <div className="">Editar</div>
          </div>
          {articlesFetched?.length > 0 &&
            articlesFetched.map((article) => (
              <div className="articlesAdmin-table_item fs-14">
                <div className="articlesAdmin-table_item_ellipsis w-max-240">{article.title}</div>
                <div className="articlesAdmin-table_item_ellipsis w-max-220">{article.drophead}</div>
                <div className="w-max-160">{article.createdAt.toUTCString().slice(5, -13)}</div>
                <div className="articlesAdmin-table_item_ellipsis w-max-160 fs-12">{article.author}</div>
                <div className="w-max-100">
                  <button>
                    <Link to={`/admin/articulos/crear?id=${article.id}`}>
                      <VscEdit />
                      &nbsp; Editar
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          <div className="articlesAdmin-table_pageButtons fs-14">
            <div className="articlesAdmin-table_pageButtons-container">
              <button>
                <GrFormPrevious />
              </button>
              <button className="active">1</button>
              <span className="m-0">...</span>
              <button className="">4</button>
              <button>
                <GrFormNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticulosAdmin
