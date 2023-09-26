import React, { FC } from 'react'
import './articulosAdmin.css'
import { articlesMock } from './mockArticles'
import { VscEdit } from 'react-icons/vsc'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'

interface ArticulosAdminProps {}

const ArticulosAdmin: FC<ArticulosAdminProps> = ({}) => {
  return (
    <div id="articlesAdmin">
      <div className="articlesAdmin-container">
        <div className="articlesAdmin-table">
          <div className="articlesAdmin-table_item">
            <div className="articlesAdmin-table_item_title mw-200">Titulo</div>
            <div className="articlesAdmin-table_item_title mw-240">Subtitulo</div>
            <div className="articlesAdmin-table_item_date">Fecha</div>
            <div className="articlesAdmin-table_item_date">Autor</div>
            <div className="articlesAdmin-table_item_edit">Editar</div>
          </div>
          {articlesMock.articles.map((article) => (
            <div className="articlesAdmin-table_item fs-14">
              <div className="articlesAdmin-table_item_title fs-14">{article.title}</div>
              <div className="articlesAdmin-table_item_title fs-14">{article.drophead}</div>
              <div className="articlesAdmin-table_item_date">{article.date.toUTCString().slice(0, -7)}</div>
              <div className="articlesAdmin-table_item_date">{article.author}</div>
              <div className="articlesAdmin-table_item_edit w-max-100">
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
