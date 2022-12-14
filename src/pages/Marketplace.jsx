import React from 'react'
import {productData} from '../content/files/dummyData'
import { Link } from 'react-router-dom'

const Marketplace = () => {
  const productList = productData.map((product,key) => {
    return (
      <div key={key}>
        <Link to={`${product.id}`}>{product.name}</Link>
      </div>
    )
  })
  return (
    <>{productList}</>
  )
}

export default Marketplace