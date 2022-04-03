import React from 'react'
import { Link } from 'react-router-dom'

const Categorias = () => {
  return (
      <div>

          <Link to="category/collares">Collares</Link>
          <Link to="category/pulseras">Pulseras</Link>
          <Link to="category/piedras">Piedras</Link>
      </div>
  )
}

export default Categorias