import React from 'react'
import logo from '../../img/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt="" />
      <span>Made with <b>React.js</b></span>
    </div>
  )
}

export default Footer