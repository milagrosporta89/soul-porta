import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../CategoryCard'

const Categorias = () => {
  return (
      <div>

          <Link to="category/collares"><CategoryCard name={"COLLARES"}></CategoryCard></Link>
          <Link to="category/pulseras">Pulseras</Link>
          <Link to="category/piedras">Piedras</Link>
      </div>
  )
}

export default Categorias