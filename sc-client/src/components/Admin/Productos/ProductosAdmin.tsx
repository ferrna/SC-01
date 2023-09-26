import React, { FC } from 'react'
import './productosAdmin.css'
import { productsMock } from './mockProducts'
import { VscEdit } from 'react-icons/vsc'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'

interface ProductosAdminProps {}

const ProductosAdmin: FC<ProductosAdminProps> = ({}) => {
  return (
    <div id="productsAdmin">
      <div className="productsAdmin-container">
        <div className="productsAdmin-search fs-14">
          <input /> Filtrar por categoria{' '}
          <select>
            <option value=""></option>
          </select>
        </div>
        <div className="productsAdmin-table">
          <div className="productsAdmin-table_item">
            <div className="productsAdmin-table_item_image mw-200 d-flex-center">Imagen</div>
            <div className="productsAdmin-table_item_title mw-300">Nombre</div>
            <div className="productsAdmin-table_item_categories mw-240">Categorias</div>
            <div className="">Editar</div>
            <div className="productsAdmin-table_item_title mw-300">Descripcion</div>
            <div className="">Fecha Act.</div>
            <div className="">Articulos °</div>
          </div>
          {productsMock.products.map((product) => (
            <div className="productsAdmin-table_item fs-14">
              <div
                className="productsAdmin-table_item_image mw-200"
                /* style={{ backgroundImage: product.image1 }} */
              >
                {product.image1}
              </div>
              <div className="productsAdmin-table_item_title mw-300">{product.name}</div>
              <div className="productsAdmin-table_item_categories mw-240">{product.categories.join('  ')}</div>
              <div className="">
                <button>
                  <Link to={`/admin/productos/crear?id=${product.id}`}>
                    <VscEdit />
                    &nbsp; Editar
                  </Link>
                </button>
              </div>
              <div className="productsAdmin-table_item_title mw-300 fs-14">{product.description}</div>
              <div className="mw-240">{product.date.toUTCString().slice(0, -13)}</div>
              <div className="">{product.articles.length}</div>
            </div>
          ))}
          <div className="productsAdmin-table_pageButtons fs-14">
            <div className="productsAdmin-table_pageButtons-container">
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

export default ProductosAdmin

//TO DO:
// Colocar imagen del producto como background-image de la celda imagen
// classnames for min-width max-width text ellipsis
