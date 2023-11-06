import { Button, Space, Table, Tag, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCart, deleteCart, handleQuantityChange } from '../../stores/reducers/productReducer'
import { orderApi } from '../../servers/user'

export const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.productReducer)
  const { user } = useSelector((state) => state.userReducer)
  console.log(cart)
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img width={80} height={80} src={text} alt='' />
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      render: (text) => <p style={{ fontSize: 18 }}>{text}</p>
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      render: (text) => <p>${text}</p>
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
      render: (text, record) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <button
              onClick={() => dispatch(handleQuantityChange({ isF: true, id: record.id }))}
              className='btn btn-primary'
            >
              +
            </button>
            <div className='mx-3'>{text}</div>
            <button
              onClick={() => dispatch(handleQuantityChange({ isF: false, id: record.id }))}
              className='btn btn-primary'
            >
              -
            </button>
          </div>
        )
      }
    },
    {
      title: 'Total',
      key: 'total',
      render: (text, record, index) => {
        return <p className='text-danger'>${record.price * record.quantity}</p>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <button onClick={() => dispatch(deleteCart(record.id))} className='btn btn-danger'>
            Delete
          </button>
        )
      }
    }
  ]

  const handleOrder = async (cart) => {
    try {
      const orderDetail = cart.map((item) => {
        return {
          productId: item.id,
          quantity: item.quantity
        }
      })
      const email = user.email
      const data = {
        email: email,
        orderDetail: orderDetail
      }
      await orderApi(data)
      message.success({
        content: 'Order successfully! Thanks 🙏🏻 '
      })
      dispatch(deleteAllCart())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container-lg'>
      <h1>Cart</h1>
      <Table size='middle' columns={columns} dataSource={cart} />
      <div className='text-right'>
        {' '}
        <Button onClick={() => handleOrder(cart)} type='primary'>
          Submit Order
        </Button>
      </div>
    </div>
  )
}
