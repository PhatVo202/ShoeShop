import React from 'react'
import { Button, Carousel } from 'antd'

export const CarouselProduct = () => {
  const contentStyle = {
    height: '661px',
    width: '100%',
    position: 'relative',
    objectFit: 'cover'
  }
  return (
    <Carousel autoplay={true} effect='fade'>
      <div style={{ position: 'relative' }}>
        <img
          style={contentStyle}
          src='https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2818&q=80'
          alt=''
        />
        {/* <div
          style={{ position: 'absolute', top: '55%', zIndex: '999', left: '50%', transform: 'translate(-50%,-50%)' }}
          className='container'
        >
          <section>
            <h1 className='text-light'>Iphone 15</h1>
            <p>Kieu dang thiet ke hien dai</p>
          </section>
          <Button type='primary'>Mua ngay</Button>
        </div> */}
      </div>
      <div>
        <img
          style={contentStyle}
          src='https://plus.unsplash.com/premium_photo-1683749076840-1b5455a28e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
          alt=''
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2842&q=80'
          alt=''
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src='https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80'
          alt=''
        />
      </div>
    </Carousel>
  )
}
