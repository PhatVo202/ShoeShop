import React from 'react'
import Product from '../product/Product'
import { CarouselProduct } from '../../components/carousel/Carousel'

export const HomePage = () => {
  return (
    <div>
      <CarouselProduct />
      <Product />
    </div>
  )
}
