import React from 'react'
import Button  from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
         <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>About</h1>
            <p className='text-light lead'>Stock Prediction Portal is a web application that uses Machine Learning to forecast future stock prices. It analyzes historical data to identify trends and provide accurate predictions. The Django backend handles data processing and model inference, while the React frontend offers an interactive and user-friendly interface. Users can login or register to view predictions and visualize stock trends in real time. This platform helps investors make informed decisions based on data-driven insights.</p>
            <Button text="Login" class1='btn-outline-info' />
           
          </div>
      </div>
    </>
  )
}

export default Main