import React from 'react'

export const Button = (props) => {
  return (
    <>
       <a className={`btn ${props.class1}`} href="#">{props.text}</a>
     </>  
  )
}
export default Button