import React from 'react'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className={`row ${styles.footer_head}`}>
          <div className={`col-lg-4 col-md-4 col-xl-4 col-xs-4  ${styles.block_content}`}>
            <div className={styles.content}>
              <h3>GET HELP</h3>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>Nike</a>
                </li>
                <li>
                  <a href='#'>Adidas</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-xl-4 col-xs-4  ${styles.block_content}`}>
            <div className={styles.content}>
              <h3>SUPPORT</h3>
              <ul>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
                <li>
                  <a href='#'>Help</a>
                </li>
                <li>
                  <a href='#'>Phone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-xl-4 col-xs-4  ${styles.block_content}`}>
            <div className={styles.content}>
              <h3>REGISTER</h3>
              <ul>
                <li>
                  <a href='#'>Register</a>
                </li>
                <li>
                  <a href='#'>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_body}>
        <p>©2022 Cybersoft All Rights Reserved | Design Theme by Phát</p>
      </div>
    </>
  )
}
