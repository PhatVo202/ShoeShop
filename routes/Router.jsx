import React from 'react'
import { useRoutes } from 'react-router-dom'
import { HomeLayout } from '../layouts/home/HomeLayout'
import { Login } from '../pages/login/Login'
import { HomePage } from '../pages/home/HomePage'
import { AuthGuard } from '../guards/AuthGuard'
import { NoAuthGuard } from '../guards/NoAuthGuard'
import { DetailProduct } from '../pages/detailproduct/DetailProduct'
import { Profile } from '../pages/profile/Profile'
import { Register } from '../pages/register/Register'
import { Cart } from '../pages/cart/Cart'

export default function Router() {
  const routing = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/',
          element: <NoAuthGuard />,
          children: [
            {
              path: '/login',
              element: <Login />
            }
          ]
        },
        {
          path: '/',
          element: <NoAuthGuard />,
          children: [
            {
              path: '/register',
              element: <Register />
            }
          ]
        },
        {
          path: '/',
          element: <AuthGuard />,
          children: [
            {
              path: '/detail/:id',
              element: <DetailProduct />
            }
          ]
        },
        {
          path: '/',
          element: <AuthGuard />,
          children: [
            {
              path: '/profile',
              element: <Profile />
            }
          ]
        },
        {
          path: '/',
          element: <AuthGuard />,
          children: [
            {
              path: '/cart',
              element: <Cart />
            }
          ]
        }
      ]
    }
  ])
  return routing
}
