import React, { Fragment, useEffect } from 'react'
import { Avatar, Button, Dropdown, Menu, Space, notification, Input } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction, removeUserAction } from '../../stores/reducers/userReducer'

export const Header = () => {
  const { Search } = Input
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.userReducer)
  const { userProfile } = useSelector((state) => state.userReducer)
  const { cart } = useSelector((state) => state.productReducer)

  const items = [
    {
      label: <NavLink to='/profile'>Profile</NavLink>,
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <a
          onClick={() => {
            handleLogoutUser()
            navigate('/')
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          Logout🚪
        </a>
      ),
      key: '1'
    }
  ]

  useEffect(() => {
    user && dispatch(getProfileAction(user.accessToken))
  }, [user])

  const handleLogoutUser = () => {
    dispatch(removeUserAction())
    notification.success({
      placement: 'topRight',
      message: 'Lougout success!!',
      duration: 1.5
    })
  }

  return (
    <>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <NavLink to='/' className='navbar-brand' href='#'>
            Shoe Run
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item '>
                <NavLink to='/' className='nav-link' href='#'>
                  <Space>🔎</Space>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/cart' className='nav-link' style={{ position: 'relative' }}>
                  🛒
                  <span
                    style={{
                      position: 'absolute',
                      top: -5,
                      left: 17,
                      border: '1px solid gray',
                      padding: '0.5px 7px',
                      borderRadius: '50%'
                    }}
                  >
                    {cart?.reduce((total, item) => {
                      return (total += item.quantity)
                    }, 0)}
                  </span>
                </NavLink>
              </li>
              <li className='nav-item ml-3'>
                {userProfile ? (
                  <>
                    <Dropdown
                      menu={{
                        items
                      }}
                      placement='bottom'
                      arrow
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Avatar src={<img src={userProfile?.avatar} alt='avatar' />} />
                          <span>{userProfile?.name} ⌄</span>
                        </Space>
                      </a>
                    </Dropdown>
                  </>
                ) : (
                  <div className='nav-link ml-3'>
                    <Button onClick={() => navigate('/login')} type='primary' size='middle'>
                      Login
                    </Button>
                  </div>
                )}
                {/* <div className='nav-link'>
                    <Button onClick={() => navigate('/login')} type='primary' size='middle'>
                      Login
                    </Button>
                  </div> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
