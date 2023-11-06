import React, { useEffect, useState } from 'react'
import styles from './login.module.scss'
import { loginApi } from '../../servers/user'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserAction } from '../../stores/reducers/userReducer'

export const Login = () => {
  const [data, setData] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const { name, value } = event.target

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await loginApi(data)
      dispatch(getUserAction(result.data.content))
      toast.success('Logged in successfully!!🙋🏻‍♂️', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      navigate('/')
    } catch (error) {
      toast.error(`${error.response.data.message} 🤯`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
    // event.preventDefault()
    // const result = await loginApi(state)
    // localStorage.setItem('USER_INFO_KEY', JSON.stringify(result.data.content))
    // dispatch(setUserInforAction(result.data.content))
    // navigate('/')
    // console.log(result.data.content)
  }
  return (
    <>
      <div className={styles.bg__login}>
        <div className={styles.center}>
          <h1>Login</h1>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className={styles.txt_field}>
              <input name='email' type='email' required />
              <span />
              <label>Email</label>
            </div>
            <div className={styles.txt_field}>
              <input name='password' type='password' required />
              <span />
              <label>Password</label>
            </div>
            <input type='submit' defaultValue='Login' />
            <div className={styles.signup_link}>
              Not a member?{' '}
              <NavLink to='/register' className='text-primary'>
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
