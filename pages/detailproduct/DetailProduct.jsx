import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductByIdApi } from '../../servers/product'
import Meta from 'antd/es/card/Meta'
import { Button, Card, Typography, message } from 'antd'
import { addToCart, getProductByIdAction } from '../../stores/reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import styles from './detailProduct.module.scss'

export const DetailProduct = () => {
  const { Text } = Typography
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { detailProduct } = useSelector((state) => state.productReducer)
  const [quantity, setQuantity] = useState(1)

  const param = useParams()
  useEffect(() => {
    dispatch(getProductByIdAction(param.id))
  }, [param.id])

  const renderRegarProduct = () => {
    return detailProduct.relatedProducts?.map((item) => {
      return (
        <div className='col-4' key={item.id}>
          <Card hoverable cover={<img alt='example' src={item.image} />}>
            <Meta
              title={item.name}
              description={
                item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description
              }
            />
            <Text type='danger'>
              <h4 style={{ color: '#ff4d4f' }}>${item.price}</h4>
            </Text>

            <Button block onClick={() => navigate(`/detail/${item.id}`)}>
              Buy now
            </Button>
          </Card>
        </div>
      )
    })
  }

  const deasecreBtn = () => {
    if (quantity < 2) {
      return
    } else {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = (product) => {
    const data = { ...product, quantity }
    dispatch(addToCart(data))
    message.success({
      content: 'The product has been added to cart'
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src={detailProduct.image} alt='' />
        </div>
        <div className='col-6 mt-4'>
          <h1>{detailProduct.name}</h1>
          <h4>{detailProduct.description}</h4>
          <p>Availabel Size</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {detailProduct.size?.map((size, index) => {
              return (
                <div key={index} className={styles.product__size}>
                  {size}
                </div>
              )
            })}
          </div>
          <div className='my-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Button type='primary' danger onClick={() => setQuantity(quantity + 1)}>
              <span className='text-white'>+</span>
            </Button>
            <div className='mx-2' style={{}}>
              {quantity}
            </div>
            <Button type='primary' danger onClick={() => deasecreBtn()}>
              <span>-</span>
            </Button>
          </div>
          <h6 className='text-danger mt-2'>${detailProduct.price}</h6>
          <Button block onClick={() => handleAddToCart(detailProduct)}>
            Add to cart
          </Button>
        </div>
        <h1 className='col-12 text-center mt-1 mb-5'>--Related Product--</h1>
        {renderRegarProduct()}
      </div>
    </div>
  )
}
