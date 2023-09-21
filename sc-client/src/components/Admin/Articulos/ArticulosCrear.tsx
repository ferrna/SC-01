import React, { FC } from 'react'
import './articulosCrear.css'

interface ArticulosCrearProps {}

const ArticulosCrear: FC<ArticulosCrearProps> = ({}) => {
  return (
    <div id="articulosCrear">
      <div className="articulosCrear-container">
        <h2>Creación de un artículo</h2>
        <section className="articulo_componentes">
          <div>
            <label htmlFor="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" />
          </div>
          <div>
            <label htmlFor="subtitulo">Subtítulo</label>
            <input type="text" name="subtitulo" id="subtitulo" />
          </div>
          <div className="fecha-y-author">
            <span>
              <label htmlFor="autor">Autor</label>
              <input type="text" name="autor" id="autor" />
            </span>
            <span>
              <label htmlFor="fecha">Fecha</label>
              <input type="date" name="fecha" id="fecha" />
            </span>
          </div>
          <div>
            <h3>Imagen/es</h3>
            <label htmlFor="imagen">Imagen 1</label>
            <input type="text" name="imagen" id="imagen" />
          </div>
        </section>
        <section className="articulo_contenidos">
          <h3>Contenido/s</h3>
          <div className="contenido-1">
            <label htmlFor="contenido">Contenido 1</label>
            <textarea name="contenido" id="contenido" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ArticulosCrear
