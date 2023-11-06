import { notification } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export const AuthGuard = () => {
  const { user } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      notification.warning({
        placement: 'top',
        message: 'Đăng nhập để tiếp tục vào trang.',
        duration: 1.5
      })
      navigate('/login')
    }
  }, [])

  return <Outlet />
}
