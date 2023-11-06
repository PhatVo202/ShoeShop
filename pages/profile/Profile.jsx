import { Button, Table, Tabs, Tag, message, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileApi } from '../../servers/user'
import { getProfileAction, setNameProfile } from '../../stores/reducers/userReducer'

export const Profile = () => {
  const dispatch = useDispatch()
  const { userProfile } = useSelector((state) => state.userReducer)
  const { user } = useSelector((state) => state.userReducer)

  const [stateValue, setStateValue] = useState({
    email: '',
    phone: '',
    gender: true,
    password: '12345678',
    name: ''
  })
  useEffect(() => {
    dispatch(getProfileAction(user.accessToken))
  }, [])
  useEffect(() => {
    if (userProfile) {
      setStateValue({
        email: userProfile.email,
        password: userProfile.password,
        name: userProfile.name,
        phone: userProfile.phone,
        gender: userProfile.gender
      })
    }
  }, [userProfile])

  const handChange = (e) => {
    const { name, value } = e.target
    setStateValue({
      ...stateValue,
      [name]: value
    })
  }
  const handleUpdate = async (accessToken, data) => {
    try {
      await updateProfileApi(accessToken, data)
      message.success({
        content: 'Update success'
      })
      dispatch(setNameProfile(data.name))
    } catch (error) {
      notification.error({
        message: error.response.data.message
      })
    }
  }
  const { email, phone, gender, password, name } = stateValue || {}
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      key: 'name',
      render: (text) => (
        <Tag style={{ fontSize: 18 }} color='lime'>
          {text}
        </Tag>
      )
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: '15%',
      render: (text) => <img width={100} height={100} src={text} alt={text} />
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '15%',
      key: 'price',
      render: (text) => <p className='text-danger'>${text}</p>
    },
    {
      title: 'Description',
      key: 'description',
      width: '45%',
      dataIndex: 'description'
    }
  ]

  const infoOrder = userProfile?.ordersHistory?.map((item) => {
    return item.orderDetail
  })
  console.log(infoOrder)

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-4'>
          <img src={userProfile?.avatar} alt='' width={200} height={200} style={{ borderRadius: '50%' }} />
          <h3 className='mt-4 pl-3'>{userProfile?.name}</h3>
        </div>
        <div className='col-8'>
          <Tag color='#108ee9' style={{ fontSize: 24, padding: 10, marginBottom: 10 }}>
            Information
          </Tag>
          <form>
            <div className='row'>
              <div className='col-6'>
                <p>Email:</p>
                <div className='from-group'>
                  <input type='text' name='email' value={email} onChange={handChange} className='form-control' />
                </div>
              </div>
              <div className='col-6'>
                <p>Password:</p>
                <div className='from-group'>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handChange}
                    className='form-control'
                  />
                </div>
              </div>
              <div className='col-6'>
                <p>Name:</p>
                <div className='from-group'>
                  <input type='text' name='name' value={name} onChange={handChange} className='form-control' />
                </div>
              </div>
              <div className='col-6'>
                <p>Phone:</p>
                <div className='from-group'>
                  <input type='text' name='phone' value={phone} onChange={handChange} className='form-control' />
                </div>
              </div>
              <div className='col-6 d-flex' style={{ justifyContent: 'space-between' }}>
                <p>Gender:</p>
                <div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      value='true'
                      id='inlineRadio1'
                      defaultValue='option1'
                      onChange={handChange}
                      checked={gender === true}
                    />
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      Male
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='gender'
                      value='false'
                      id='inlineRadio2'
                      onChange={handChange}
                      defaultValue='option2'
                    />
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className='text-right'>
            <Button onClick={() => handleUpdate(user.accessToken, stateValue)} type='primary'>
              Update
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Tabs size='large' type='card'>
          <Tabs.TabPane tab='Order history' key='item1'>
            {userProfile?.ordersHistory.map((history) => {
              return (
                <div key={history.id} className='mb-5'>
                  <p style={{ fontSize: 20 }}>Order have been placed on: {history.date}</p>
                  <Table
                    pagination={{
                      position: ['none']
                    }}
                    size='large'
                    columns={columns}
                    dataSource={history.orderDetail}
                  />
                </div>
              )
            })}
            {/* <Table columns={columns} dataSource={userProfile.ordersHistory.orderDetail} /> */}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Favourite' key='item2'></Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}
