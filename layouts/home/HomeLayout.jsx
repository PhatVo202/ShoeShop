import React from 'react'
import { Header } from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { ToastContainer } from 'react-toastify'

export const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  )
}
