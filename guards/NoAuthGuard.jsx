import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export const NoAuthGuard = () => {
  const { user } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    user && navigate('/')
  }, [])
  return <Outlet />
}
