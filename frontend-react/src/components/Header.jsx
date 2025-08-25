import React from 'react'
import  Button  from './Button'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>
        <div>
           <Button text='Login' class1="btn-outline-info" />
            &nbsp; 
            <Button text='Register' class1="btn-info"/>  
        </div>
      </nav>
      
    </>
  )
}

export default Header