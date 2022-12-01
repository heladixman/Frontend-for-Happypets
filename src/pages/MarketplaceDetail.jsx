import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../content/files/dummyData'

const MarketplaceDetail = () => {
    const { productURL} = useParams()
    const thisProduct = productData.find((prod) => prod.url === productURL)
    return (
        <>{thisProduct.name}</>
  )
}

export default MarketplaceDetail